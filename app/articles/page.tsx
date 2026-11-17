import type { Metadata } from 'next';
import { VscBook, VscLinkExternal } from 'react-icons/vsc';
import { publications, getSocial } from '@/portfolio.config';
import styles from '@/styles/ArticlesPage.module.css';
import card from '@/styles/ArticleCard.module.css';

export const metadata: Metadata = { title: 'Research & Publications' };

export default function ResearchPage() {
  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <header className={styles.header}>
          <div className={styles.headerMain}>
            <div className={styles.iconWrapper}><VscBook size={24} /></div>
            <div className={styles.headerContent}>
              <h1 className={styles.title}>Research & Publications</h1>
              <p className={styles.subtitle}>
                Efficient language models, knowledge distillation, and computer vision for nanophotonics.
              </p>
            </div>
          </div>
          <a href={getSocial('scholar')!.href} target="_blank" rel="noopener noreferrer" className={styles.profileLink}>
            Google Scholar <VscLinkExternal size={14} />
          </a>
        </header>
        <div className={styles.articlesList}>
          {publications.map((paper, index) => (
            <a key={paper.id} href={paper.url} target="_blank" rel="noopener noreferrer" className={card.card}>
              <div className={card.number}>{String(index + 1).padStart(2, '0')}</div>
              <div className={card.content}>
                <div className={card.stat}>{paper.venue} · {paper.year}</div>
                <h2 className={card.title}>{paper.title}</h2>
                <p className={card.description}>{paper.description}</p>
                <p className={card.description}>{paper.authors}</p>
                <span className={card.stat}>Read paper <VscLinkExternal size={14} /></span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
