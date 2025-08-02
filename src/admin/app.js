import { prefixPluginTranslations } from '@strapi/helper-plugin';
import pluginPkg from '../../package.json';

const pluginId = pluginPkg.name.replace(/^@strapi\/plugin-/i, '');

const plugin = {
  id: pluginId,
  initializer: (store) => {
    store.dispatch('plugin::i18n.i18n.setLocale', 'pt-BR'); // Defina o idioma padrão aqui
  },
  // ... outras configurações do plugin, se houver
};

export default plugin;