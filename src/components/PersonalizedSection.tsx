import React from 'react'
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Lock, Sparkles, Target, Brain } from "lucide-react";


const PersonalizedSection = () => {
    const scrollToInternships = () => {
        document.getElementById('internships')?.scrollIntoView({ behavior: 'smooth' });
    };
    return (
        <div>
            <section id="internships" className="py-20 px-6">
                <div className="container mx-auto">
                    <div className="text-center mb-16 animate-slide-up">
                        <h2 className="text-4xl md:text-5xl font-bold text-hero-gradient mb-6">
                            Personalized Recommendations
                        </h2>
                        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                            Our AI analyzes your skills, preferences, and career goals to find the perfect matches
                        </p>
                    </div>

                    {/* Locked content with blur effect */}
                    <div className="relative">
                        {/* Blur overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent z-10 backdrop-blur-sm rounded-3xl" />

                        {/* Content behind blur */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 opacity-60">
                            {[1, 2, 3, 4, 5, 6].map((i) => (
                                <Card key={i} className="p-6 hover:shadow-lg transition-all duration-300 bg-gradient-to-br from-card to-card/50">
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="w-12 h-12 bg-brand-primary/10 rounded-lg flex items-center justify-center">
                                            <Target className="w-6 h-6 text-brand-primary" />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold">Software Engineering Intern</h3>
                                            <p className="text-sm text-muted-foreground">Google • Remote</p>
                                        </div>
                                    </div>
                                    <div className="space-y-2 mb-4">
                                        <div className="flex items-center gap-2">
                                            <span className="text-sm bg-brand-primary/10 text-brand-primary px-2 py-1 rounded">React</span>
                                            <span className="text-sm bg-brand-secondary/10 text-brand-secondary px-2 py-1 rounded">Python</span>
                                        </div>
                                        <p className="text-sm text-muted-foreground">98% Match • $5,000/month</p>
                                    </div>
                                    <Button variant="outline" size="sm" className="w-full">
                                        View Details
                                    </Button>
                                </Card>
                            ))}
                        </div>

                        {/* Lock overlay */}
                        <div className="absolute inset-0 flex items-center justify-center z-20">
                            <div className="text-center p-8 bg-background/90 backdrop-blur-md rounded-3xl border border-brand-primary/20 shadow-2xl max-w-md mx-auto">
                                <div className="w-16 h-16 bg-gradient-to-r from-brand-primary to-brand-secondary rounded-full flex items-center justify-center mx-auto mb-6 animate-glow">
                                    <Lock className="w-8 h-8 text-white" />
                                </div>
                                <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-brand-primary to-brand-secondary bg-clip-text text-transparent">
                                    Unlock Personalized Matches
                                </h3>
                                <p className="text-muted-foreground mb-6">
                                    Sign up to see internships tailored specifically for your skills and career goals
                                </p>
                                <Button className="bg-gradient-to-r from-brand-primary to-brand-secondary hover:from-brand-primary/90 hover:to-brand-secondary/90 text-white w-full">
                                    <Sparkles className="w-4 h-4 mr-2" />
                                    <a href="https://quiz-34cm.onrender.com" target="_blank" rel="noopener noreferrer">Take a Quiz</a>
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default PersonalizedSection
