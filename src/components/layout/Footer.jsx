import Container from './Container';
import SocialLinks from '../ui/SocialLinks';

const Footer = ({ profile }) => {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200 dark:border-slate-800 py-10">
      <Container>
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 dark:text-slate-400 text-sm text-center sm:text-left">
            © {year}{' '}
            <span className="font-medium text-slate-700 dark:text-slate-300">
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
