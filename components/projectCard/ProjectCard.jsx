import './projectCard.css';

import Image from 'next/image';
import {MdAccessTime, MdOutlineDoubleArrow} from 'react-icons/md';
import {usePathname} from 'next/navigation';

export default function ProjectCard({image, tech, title, description, readingTime, route}) {
  const pathname = usePathname();

  return (
    <section className={`card_container ${pathname === '/portfolio' ? 'card_container-grid' : ''}`}>
      <section className={`card ${pathname === '/portfolio' ? 'card-remove-grid' : ''}`}>
        <h4 className={`card_header ${pathname === '/portfolio' ? 'card_header-hidden_grid' : ''}`}>
          {title}
        </h4>
        <div
          className={`card_content ${
            pathname === '/portfolio' ? 'card_content-reverse_grid' : ''
          }`}>
          <div
            className={`card_description ${
              pathname === '/portfolio' ? 'card_description-grid' : ''
            }`}>
            <div
              className={`card_description-title ${
                pathname === '/portfolio' ? 'card_description-title-grid' : ''
              }`}>
              <span>
                <MdAccessTime />
                {readingTime}
              </span>
              <h2>{title}</h2>
              <div className="card_description-underline"></div>
            </div>
            <div
              className={`card_description-text ${
                pathname === '/portfolio' ? 'card_description-text-grid' : ''
              }`}>
              <p>{description?.slice(0, 150)}...</p>
              <h4>{tech}</h4>
              <a href={`portfolio/${title}`} className="btn">
                VIEW PROJECT <MdOutlineDoubleArrow />
              </a>
            </div>
          </div>
          <a
            href={route}
            className={`card_image ${pathname === '/portfolio' ? 'card_image-grid' : ''}`}>
            <Image src={image} width={1000} height={1000} alt="Project image" />
          </a>
        </div>
      </section>
    </section>
  );
}
