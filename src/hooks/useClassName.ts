function useClassName() {
    return (classes: string[], mods?: { [key: string]: boolean }) => {
        let cssStore = [...classes.filter(css => !!css)];
        if (mods) {
            Object.entries(mods).forEach(([name, status]) => {
                if (status) {
                    cssStore.push(name);
                }
            })
        }
        return cssStore.join(' ')
    };
}

export default useClassName;