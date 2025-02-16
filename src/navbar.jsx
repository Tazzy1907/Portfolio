
const NavBar = () => {
    return (
        <header class="fixed top-0 left-0 w-full z-50 bg-white dark:bg-gray-900 shadow-md" >
            <div class="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
                <div class="flex h-16 items-center justify-between">
                <div class="flex-1 md:flex md:items-center md:gap-12">

                </div>

                <div class="md:flex md:items-center md:gap-12">
                    <nav aria-label="Global" class="hidden md:block">
                    <ul class="flex items-center gap-6 text-sm">
                        <li>
                        <a
                            class="text-gray-500 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75"
                            href="#about"
                        >
                            About
                        </a>
                        </li>

                        <li>
                        <a
                            class="text-gray-500 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75"
                            href="#projects"
                        >
                            Projects
                        </a>
                        </li>

                        <li>
                        <a
                            class="text-gray-500 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75"
                            href="#experience"
                        >
                            Experience
                        </a>
                        </li>

                        <li>
                        <a
                            class="text-gray-500 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75"
                            href="#education"
                        >
                            Education
                        </a>
                        </li>

                        <li>
                        <a
                            class="text-gray-500 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75"
                            href="#links"
                        >
                            Links
                        </a>
                        </li>
                    </ul>
                    </nav>
                </div>
                </div>
            </div>
            </header>
    );
}

export default NavBar;