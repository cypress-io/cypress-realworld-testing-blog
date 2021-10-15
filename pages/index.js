import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import { getSortedPostsData } from "../lib/posts";
import Link from "next/link";
import Date from "../components/date";

export default function Home({ allPostsData }) {
  fetch("http://localhost:3000/api/posts")
    .then((response) => response.json())
    .then((data) => data);

  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <ul className={utilStyles.list} data-test="posts-list">
          {allPostsData.map(({ id, date, title }, index) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>
                <a data-test={`post-link-${index}`}>{title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} index={index} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}
