
            export let c = ["Home","Banda","Bio","Media","© 2025 Los Compits","Los Compits","La banda","Biografia","Foto e Video","Los Compits - Galleria Media","Los Compits - Biografia","Los Compits - La banda","Los Compits - Eventi","Eventi","English","Español","Français","Català","Italiano","Deutsch","Português"]
            // only during dev, for HMR
            let latestVersion = -1
            // @ts-ignore
            export function update({ version, data }) {
                if (latestVersion >= version) {
                    return
                }
                for (const [ index, item ] of data['it'] ?? []) {
                    c[index] = item
                }
                latestVersion = version
            }
        