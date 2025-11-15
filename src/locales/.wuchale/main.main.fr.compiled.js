
            export let c = ["Accueil","Groupe","Bio","Médias","© 2025 Los Compits","Los Compits","Le groupe","Biographie","Photos et Vidéos","Los Compits - Galerie Média","Los Compits - Biographie","Los Compits - Le groupe","Los Compits - Événements","Événements","English","Español","Français","Català","Italiano","Deutsch","Português"]
            // only during dev, for HMR
            let latestVersion = -1
            // @ts-ignore
            export function update({ version, data }) {
                if (latestVersion >= version) {
                    return
                }
                for (const [ index, item ] of data['fr'] ?? []) {
                    c[index] = item
                }
                latestVersion = version
            }
        