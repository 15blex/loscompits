
            export let c = ["Inici","Banda","Bio","Mitjans","© 2025 Los Compits","Los Compits","La banda","Biografia","Fotos i Vídeos","Los Compits - Galeria de Mitjans","Los Compits - Biografia","Los Compits - La banda","Los Compits - Esdeveniments","Esdeveniments","English","Español","Français","Català","Italiano","Deutsch","Português"]
            // only during dev, for HMR
            let latestVersion = -1
            // @ts-ignore
            export function update({ version, data }) {
                if (latestVersion >= version) {
                    return
                }
                for (const [ index, item ] of data['ca'] ?? []) {
                    c[index] = item
                }
                latestVersion = version
            }
        