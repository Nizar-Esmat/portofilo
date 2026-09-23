import Container from './Container';
import SocialLinks from '../ui/SocialLinks';

const Footer = ({ profile }) => {
  const year = new Date().getFullYear();

  return (
    <footer className="relative z-10 border-t border-ink-200 dark:border-ink-800 py-10">
      <Container>
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-ink-500 dark:text-ink-400 text-sm text-center sm:text-left">
            © {year}{' '}
            <span className="font-medium text-ink-700 dark:text-ink-300">
              {profile.name}
            </span>
            . Built with React &amp; Tailwind CSS.
          </p>
          <SocialLinks socials={profile.socials} size="sm" />
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
