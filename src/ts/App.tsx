import tailwindLogo from '/tailwind.png';
import typescriptLogo from '/typescript.svg';
import vikkLogo from '/vikk.png';
import viteLogo from '/vite.svg';

export function App() {
    return <div class="min-h-screen bg-white text-gray-800 font-['Orbitron'] leading-6 font-normal antialiased text-center pt-20 dark:bg-gray-900 dark:text-gray-100">
        <div class="flex justify-center items-center gap-8 mb-8">
            <a href="https://github.com/vikkjs/vikk" target="_blank">
                <img src={vikkLogo} class="h-24 p-6 cursor-pointer transition-all duration-300 hover:drop-shadow-[0_0_2em_#ff00ffaa]" alt="Vikk logo" />
            </a>
            <a href="https://tailwindcss.com/" target="_blank">
                <img src={tailwindLogo} class="h-24 p-6 cursor-pointer transition-all duration-300 hover:drop-shadow-[0_0_2em_#06b6d4]" alt="Tailwind CSS logo" />
            </a>
            <a href="https://vitejs.dev" target="_blank">
                <img src={viteLogo} class="h-24 p-6 cursor-pointer transition-all duration-300 hover:drop-shadow-[0_0_2em_#646cffaa]" alt="Vite logo" />
            </a>
            <a href="https://www.typescriptlang.org/" target="_blank">
                <img src={typescriptLogo} class="h-24 p-6 cursor-pointer transition-all duration-300 hover:drop-shadow-[0_0_2em_#3178c6aa]" alt="TypeScript logo" />
            </a>
        </div>
        <h1 class="text-5xl leading-tight">Vikk + Vite + TypeScript + Tailwind</h1>
        <p class="text-gray-500 mt-4 dark:text-gray-400">
            Click on the Vikk, Vite, TypeScript and Tailwind logos to learn more
        </p>
    </div>
}

document.body.append(<App />)