
            export let c = ["Home","Band","Bio","Media","Los Compits","La banda","Biografia","Photos and Videos","Los Compits - Media Gallery","Los Compits - Biografia","Los Compits - La banda","Los Compits - Events","Events","English","Español","Français","Català","Italiano","Deutsch","Português","© 2025 Los Compits · Todos los derechos reservados","Los Compits logo",["Mode ",0],"Cumbia, Salsa y Son Cubano"]
            // only during dev, for HMR
            let latestVersion = -1
            // @ts-ignore
            export function update({ version, data }) {
                if (latestVersion >= version) {
                    return
                }
                for (const [ index, item ] of data['pt'] ?? []) {
                    c[index] = item
                }
                latestVersion = version
            }
        