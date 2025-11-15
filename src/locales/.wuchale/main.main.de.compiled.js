
            export let c = ["Startseite","Band","Bio","Medien","Los Compits","Die Band","Biografie","Fotos und Videos","Los Compits - Medien-Galerie","Los Compits - Biografie","Los Compits - Die Band","Los Compits - Veranstaltungen","Veranstaltungen","English","Español","Français","Català","Italiano","Deutsch","Português","© 2025 Los Compits · Todos los derechos reservados","Los Compits logo",["Mode ",0],"Cumbia, Salsa y Son Cubano"]
            // only during dev, for HMR
            let latestVersion = -1
            // @ts-ignore
            export function update({ version, data }) {
                if (latestVersion >= version) {
                    return
                }
                for (const [ index, item ] of data['de'] ?? []) {
                    c[index] = item
                }
                latestVersion = version
            }
        