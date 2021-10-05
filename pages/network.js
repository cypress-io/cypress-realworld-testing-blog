import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";
import Date from "../components/date";

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
      {console.log(
        fetch("http://localhost:3000/api/posts")
          .then((response) => response.json())
          .then((data) => console.log(data))
      )}
    </Layout>
  );
}

export async function getStaticProps() {
  const allPostsData = await fetch("http://localhost:3000/api/posts")
    .then((response) => response.json())
    .then((data) => data);

  return {
    props: {
      allPostsData,
    },
  };
}
