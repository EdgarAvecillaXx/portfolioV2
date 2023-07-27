import { Rubik, Fira_Code } from 'next/font/google';

const rubik = Rubik({
  display: 'swap',
  subsets: ['latin'],
  style: ['normal'],
  variable: '--font-rubik',
});

const sourceCodePro = Fira_Code({
  display: 'swap',
  subsets: ['latin'],
  style: ['normal'],
  variable: '--font-source-code-pro',
});

const fonts = `${sourceCodePro.variable} ${rubik.variable}`;

export default fonts;
