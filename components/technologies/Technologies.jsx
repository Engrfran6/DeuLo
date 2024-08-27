import './technologies.css';
import Image from 'next/image';
import Typscript from '../../tools/typescript.svg';
import NextJs from '../../tools/nextjs.webp';
import NextJs2 from '../../tools/next.svg';
import NodeJs from '../../tools/nodejs.png';
import Figma from '../../tools/figma.png';
import ReactJs from '../../tools/react.png';

export default function Technologies() {
  return (
    <section>
      <ul className="experience">
        <li>
          <Image width={40} height={40} alt="ReactJs" src={ReactJs} title="ReactJs" />
        </li>
        <li>
          <Image width={40} height={40} alt="Typescript" src={Typscript} title="Typescript" />
        </li>

        <li>
          <Image width={40} height={40} alt="Figma" src={Figma} title="Figma" />
        </li>
        <li>
          <Image width={70} height={70} alt="NextJS" src={NextJs2} title="NextJS" />
        </li>
        <li>
          <Image width={40} height={40} alt="NodeJS" src={NodeJs} title="NodeJS" />
        </li>
      </ul>
    </section>
  );
}
