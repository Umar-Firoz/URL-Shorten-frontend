import { Footer } from "./Footer.jsx";

export function Layout({children}){
    return(
        <div className="flex min-h-[100dvh] flex-col bg-[var(--background)] text-[var(--text-primary)] relative overflow-hidden transition-colors duration-300">

            <div 
                className="absolute inset-0 pointer-events-none"
                style={{
                    backgroundImage: 'linear-gradient(var(--text-primary) 1px, transparent 1px), linear-gradient(90deg, var(--text-primary) 1px, transparent 1px)',
                    backgroundSize: '200px 200px',
                    opacity: 0.05
                }}
            />
            

            <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-[var(--text-primary)]/10 blur-[120px] rounded-full pointer-events-none" />
            <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-[var(--text-primary)]/10 blur-[120px] rounded-full pointer-events-none" />
            
            <main className="pt-[72px] relative z-10 flex-grow pb-4">
                {children}
            </main>
            
            <Footer />
        </div>
    )
}