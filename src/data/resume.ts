export interface Experience {
    company: string;
    role: string;
    period: string;
    highlights: string[];
}

export const resumeData = {
    name: "Muthukumar Ramalingam", // [cite: 1]
    title: "Lead Software Engineer | Distributed Systems & .NET Architect", // [cite: 2]
    summary: "Strategic Lead Software Engineer with 11+ years of experience specializing in the architecture of robust, scalable Microservices and Cloud-Native applications.", // 
    skills: [
        "C#/.NET Core", "Microservices", "Saga Orchestration",
        "Kafka", "Redis", "React JS", "TypeScript", "AWS", "Azure"
    ], // [cite: 10, 11, 12]
    experience: [
        {
            company: "Trimble, Chennai", // [cite: 17]
            role: "Lead Software Engineer", // [cite: 17]
            period: "April 2021 - Present", // [cite: 17]
            highlights: [
                "Architected a multi-tenant 'Connected Maintenance' platform using Saga Orchestrator.", // [cite: 18]
                "Optimized System Latency by 30% via Redis Distributed Caching.", // [cite: 19]
                "Applied Polly resilience patterns ensuring 99.9% availability." // [cite: 20]
            ]
        },
        {
            company: "Boeing, Bangalore", // [cite: 29]
            role: "Programmer Analyst", // [cite: 29]
            period: "August 2017 - December 2018", // [cite: 29]
            highlights: [
                "Developed BMAPS, an aircraft production scheduling system.", // [cite: 31]
                "Implemented R-Tree and Precedence Networks for complex Gantt charts." // [cite: 32]
            ]
        }
    ]
};