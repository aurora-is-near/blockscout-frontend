import type CspDev from 'csp-dev';

import config from 'configs/app';

export function customCss(): CspDev.DirectiveDescriptor {
  if (!config.UI.customCss.url) {
    return {};
  }

  try {
    const url = new URL(config.UI.customCss.url);
    const origin = `${ url.protocol }//${ url.hostname }${ url.port ? `:${ url.port }` : '' }`;

    return {
      'style-src': [
        origin,
      ],
    };
  } catch (error) {
    return {};
  }
}
