import { events } from '@events';

import { ShareModal } from 'components/ui/common/modals/share';

type LinkProps = {
  href: string;
  target: string;
  rel: string;
};

type ButtonProps = {
  onClick: () => void;
};

type NavItem = {
  label: string;
  props: LinkProps | ButtonProps;
};

const navItems: NavItem[] = [
  {
    label: 'Github',
    props: {
      href: 'https://github.com/1xcoder-1/profile_readme_generator_nextjs',
      target: '_blank',
      rel: 'noreferrer',
    },
  },
  
  {
    label: 'Share',
    props: {
      onClick: () => events.modal.open(ShareModal),
    },
  },
];

export { navItems };
