'use client';

import React, { useEffect, useState, useRef } from 'react';
import { useRouter, useParams } from 'next/navigation';
import { Send, ArrowLeft, MoreVertical, Shield, Clock, User as UserIcon } from 'lucide-react';
import { toast } from 'sonner';
import { db, auth } from '@/lib/firebase';
import {
    collection,
    addDoc,
    query,
    where,
    orderBy,
    onSnapshot,
    serverTimestamp,
    doc,
    getDoc
} from 'firebase/firestore';
import { onAuthStateChanged } from 'firebase/auth';

interface Message {
    id: string;
    sender: string;
    receiver: string;
    text: string;
    createdAt: any;
}

interface User {
    uid: string;
    name: string;
    profilePhoto: string;
    isOnline: boolean;
    lastSeen: string;
}

export default function ChatPage() {
    const router = useRouter();
    const params = useParams();
    const [messages, setMessages] = useState<Message[]>([]);
    const [newMessage, setNewMessage] = useState('');
    const [currentUser, setCurrentUser] = useState<any>(null);
    const [receiver, setReceiver] = useState<User | null>(null);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const unsubscribeAuth = onAuthStateChanged(auth, (user) => {
            if (user) {
                setCurrentUser(user);
            } else {
                router.push('/user-connect');
            }
        });

        // Fetch receiver details
        const fetchReceiver = async () => {
            try {
                const userDoc = await getDoc(doc(db, 'users', params.id as string));
                if (userDoc.exists()) {
                    setReceiver(userDoc.data() as User);
                }
            } catch (err) {
                console.error(err);
            }
        };
        fetchReceiver();

        return () => unsubscribeAuth();
    }, [params.id, router]);

    useEffect(() => {
        if (!currentUser || !params.id) return;

        // Query messages where (sender=me AND receiver=them) OR (sender=them AND receiver=me)
        // Note: For a true production app, you'd use a combined 'chatId' or a more complex query
        // Since Firestore limited 'OR' queries, we'll fetch messages for this 'room'
        const chatId = [currentUser.uid, params.id].sort().join('_');

        const q = query(
            collection(db, 'messages'),
            where('chatId', '==', chatId),
            orderBy('createdAt', 'asc')
        );

        const unsubscribeMessages = onSnapshot(q, (snapshot) => {
            const msgs: Message[] = [];
            snapshot.forEach((doc) => {
                msgs.push({ id: doc.id, ...doc.data() } as Message);
            });
            setMessages(msgs);
        });

        return () => unsubscribeMessages();
    }, [currentUser, params.id]);

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages]);

    const handleSendMessage = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!newMessage.trim() || !currentUser || !params.id) return;

        const chatId = [currentUser.uid, params.id as string].sort().join('_');

        try {
            await addDoc(collection(db, 'messages'), {
                chatId,
                sender: currentUser.uid,
                receiver: params.id,
                text: newMessage,
                createdAt: serverTimestamp()
            });
            setNewMessage('');
        } catch (err) {
            toast.error('Failed to send message');
        }
    };

    if (!receiver) return (
        <div className="h-screen flex items-center justify-center bg-background">
            <div className="animate-pulse text-muted-foreground font-black uppercase tracking-[0.3em]">Loading Chat...</div>
        </div>
    );

    return (
        <div className="flex flex-col h-screen bg-background">
            {/* Chat Header */}
            <header className="p-4 bg-card/40 backdrop-blur-xl border-b border-white/5 flex items-center justify-between z-10">
                <div className="flex items-center gap-4">
                    <button onClick={() => router.back()} className="p-2 hover:bg-white/5 rounded-full text-muted-foreground hover:text-white transition-colors">
                        <ArrowLeft size={20} />
                    </button>
                    <div className="relative">
                        {receiver.profilePhoto ? (
                            <img src={receiver.profilePhoto} className="w-10 h-10 rounded-full object-cover border border-white/10" />
                        ) : (
                            <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                                <UserIcon size={20} />
                            </div>
                        )}
                        <div className={`absolute bottom-0 right-0 w-3 h-3 rounded-full border-2 border-background ${receiver.isOnline ? 'bg-green-500' : 'bg-muted-foreground'}`} />
                    </div>
                    <div>
                        <h2 className="text-sm font-black text-white uppercase italic tracking-tighter leading-none">{receiver.name}</h2>
                        <span className="text-[8px] font-black uppercase tracking-widest text-muted-foreground">
                            {receiver.isOnline ? 'Online Now' : 'Chatting globally'}
                        </span>
                    </div>
                </div>

                <div className="flex items-center gap-2">
                    <button className="p-2 hover:bg-white/5 text-muted-foreground hover:text-white rounded-full transition-colors">
                        <MoreVertical size={20} />
                    </button>
                </div>
            </header>

            {/* Messages Area */}
            <main className="flex-1 overflow-y-auto p-4 space-y-4 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/5 via-background to-background">
                {messages.map((msg, index) => {
                    const isMine = msg.sender === currentUser?.uid;
                    return (
                        <div key={msg.id || index} className={`flex ${isMine ? 'justify-end' : 'justify-start'} animate-in fade-in slide-in-from-bottom-2 duration-300`}>
                            <div className={`max-w-[75%] space-y-1`}>
                                <div
                                    className={`px-4 py-3 rounded-2xl text-sm font-medium shadow-xl ${isMine
                                        ? 'bg-primary text-primary-foreground rounded-tr-none'
                                        : 'bg-card/60 backdrop-blur-md border border-white/5 text-white rounded-tl-none'
                                        }`}
                                >
                                    {msg.text}
                                </div>
                                <div className={`flex items-center gap-1 ${isMine ? 'justify-end' : 'justify-start'} text-[8px] font-black uppercase tracking-widest text-muted-foreground opacity-50`}>
                                    <Clock size={8} />
                                    {msg.createdAt ? new Date(msg.createdAt.toDate()).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) : 'Sending...'}
                                </div>
                            </div>
                        </div>
                    );
                })}
                <div ref={messagesEndRef} />
            </main>

            {/* Input Area */}
            <footer className="p-4 bg-card/40 backdrop-blur-xl border-t border-white/5">
                <form onSubmit={handleSendMessage} className="max-w-4xl mx-auto relative group">
                    <input
                        type="text"
                        value={newMessage}
                        onChange={(e) => setNewMessage(e.target.value)}
                        placeholder="Type a message..."
                        className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-6 pr-16 text-white focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all outline-none backdrop-blur-md"
                    />
                    <button
                        type="submit"
                        disabled={!newMessage.trim()}
                        className="absolute right-2 top-1/2 -translate-y-1/2 p-3 bg-primary text-primary-foreground rounded-xl shadow-lg shadow-primary/30 transition-all hover:scale-110 active:scale-90 disabled:opacity-50 disabled:scale-100"
                    >
                        <Send size={18} />
                    </button>
                </form>
                <p className="text-center text-[8px] font-black uppercase tracking-[0.3em] text-muted-foreground mt-4 opacity-30">
                    Real-time Firebase Chat
                </p>
            </footer>
        </div>
    );
}
