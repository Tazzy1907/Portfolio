const Projects = () => {
    return (
        <>
    <h3 class="text-3xl font-bold text-white">Projects</h3>
    <div>
        <div class="sm:hidden">
            <label for="Tab" class="sr-only">Tab</label>

            <select
            id="Tab"
            class="w-full rounded-md border-gray-200 dark:border-gray-700 dark:bg-gray-900 dark:text-white"
            >
            <option>Settings</option>
            <option>Messages</option>
            <option>Archive</option>
            <option select>Notifications</option>
            </select>
        </div>

        <div class="hidden sm:block">
            <div class="border-b border-gray-200 dark:border-gray-700">
            <nav class="-mb-px flex gap-6">
                <a
                href="#"
                class="shrink-0 border border-transparent p-3 text-sm font-medium text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                >
                Settings
                </a>

                <a
                href="#"
                class="shrink-0 border border-transparent p-3 text-sm font-medium text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                >
                Messages
                </a>

                <a
                href="#"
                class="shrink-0 border border-transparent p-3 text-sm font-medium text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                >
                Archive
                </a>

                <a
                href="#"
                class="shrink-0 rounded-t-lg border border-gray-300 border-b-white p-3 text-sm font-medium text-sky-600 dark:border-gray-600 dark:border-b-gray-950 dark:text-sky-300"
                >
                Notifications
                </a>
            </nav>
            </div>
        </div>
        </div>
    </>
    );
};

export default Projects;