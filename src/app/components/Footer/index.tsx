import "./style.css";

import Image from "next/image";
import Link from "next/link";

import envelope from "/public/images/envelope.svg";

const Footer = () => (
  <footer className="footer w-screen p-4 pb-8 fixed inset-x-0 bottom-0 flex items-end">
    <aside className="relative flex w-full items-center gap-4">
      <Image
        src={envelope}
        alt="Envelope"
        width={64}
        height={64}
        sizes="100vw"
        quality={100}
      />
      <div className="flex flex-col text-xs gap-2 text-neutral-content">
        <p>Copyright © guotingchaopr@gmail.com</p>
        <p>{new Date().getFullYear()} - All right reserved</p>
      </div>
    </aside>
    <nav className="relative grid-flow-col gap-2">
      {/* X */}
      <Link href="https://x.com/guotingchaopr" target="_blank">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 32 32"
        >
          <title>x-twitter</title>
          <rect
            data-element="frame"
            x="0.6400000000000006"
            y="0.6400000000000006"
            width="30.72"
            height="30.72"
            rx="7"
            ry="7"
            stroke="none"
            fill="#000"
          ></rect>
          <g fill="#FFFFFF" transform="translate(5.76 5.76) scale(0.64)">
            <path d="M18.42,14.009L27.891,3h-2.244l-8.224,9.559L10.855,3H3.28l9.932,14.455L3.28,29h2.244l8.684-10.095,6.936,10.095h7.576l-10.301-14.991h0Zm-3.074,3.573l-1.006-1.439L6.333,4.69h3.447l6.462,9.243,1.006,1.439,8.4,12.015h-3.447l-6.854-9.804h0Z"></path>
          </g>
        </svg>
      </Link>
      {/* github */}
      <Link href="https://github.com/guotingchao" target="_blank">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 32 32"
        >
          <title>github</title>
          <rect
            data-element="frame"
            x="0.6400000000000006"
            y="0.6400000000000006"
            width="30.72"
            height="30.72"
            rx="7"
            ry="7"
            stroke="none"
            fill="#000"
          ></rect>
          <g fill="#FFFFFF" transform="translate(5.76 5.76) scale(0.64)">
            <path d="M16,2.345c7.735,0,14,6.265,14,14-.002,6.015-3.839,11.359-9.537,13.282-.7,.14-.963-.298-.963-.665,0-.473,.018-1.978,.018-3.85,0-1.312-.437-2.152-.945-2.59,3.115-.35,6.388-1.54,6.388-6.912,0-1.54-.543-2.783-1.435-3.762,.14-.35,.63-1.785-.14-3.71,0,0-1.173-.385-3.85,1.435-1.12-.315-2.31-.472-3.5-.472s-2.38,.157-3.5,.472c-2.677-1.802-3.85-1.435-3.85-1.435-.77,1.925-.28,3.36-.14,3.71-.892,.98-1.435,2.24-1.435,3.762,0,5.355,3.255,6.563,6.37,6.913-.403,.35-.77,.963-.893,1.872-.805,.368-2.818,.963-4.077-1.155-.263-.42-1.05-1.452-2.152-1.435-1.173,.018-.472,.665,.017,.927,.595,.332,1.277,1.575,1.435,1.978,.28,.787,1.19,2.293,4.707,1.645,0,1.173,.018,2.275,.018,2.607,0,.368-.263,.787-.963,.665-5.719-1.904-9.576-7.255-9.573-13.283,0-7.735,6.265-14,14-14Z"></path>
          </g>
        </svg>
      </Link>
      {/* gmail */}
      <Link href="mailto:guotingchaopr@gmail.com" target="_blank">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 32 32"
        >
          <title>google</title>
          <rect
            data-element="frame"
            x="0.6400000000000006"
            y="0.6400000000000006"
            width="30.72"
            height="30.72"
            rx="7"
            ry="7"
            stroke="none"
            fill="#000"
          ></rect>
          <g fill="#FFFFFF" transform="translate(5.76 5.76) scale(0.64)">
            <path
              d="M29.44,16.318c0-.993-.089-1.947-.255-2.864h-13.185v5.422h7.535c-.331,1.744-1.324,3.22-2.813,4.213v3.525h4.544c2.647-2.444,4.175-6.033,4.175-10.296Z"
              opacity=".4"
            ></path>
            <path d="M16,30c3.78,0,6.949-1.247,9.265-3.385l-4.544-3.525c-1.247,.84-2.838,1.349-4.722,1.349-3.64,0-6.733-2.456-7.84-5.765l-2.717,2.09-1.941,1.525c2.304,4.569,7.025,7.713,12.498,7.713Z"></path>
            <path
              d="M8.16,18.66c-.28-.84-.445-1.731-.445-2.66s.165-1.82,.445-2.66v-3.615H3.502c-.955,1.884-1.502,4.009-1.502,6.275s.547,4.391,1.502,6.275h3.332s1.327-3.615,1.327-3.615Z"
              opacity=".4"
            ></path>
            <path d="M16,7.575c2.062,0,3.895,.713,5.358,2.087l4.009-4.009c-2.431-2.265-5.587-3.653-9.367-3.653-5.473,0-10.195,3.144-12.498,7.725l4.658,3.615c1.107-3.309,4.2-5.765,7.84-5.765Z"></path>
          </g>
        </svg>
      </Link>
    </nav>
  </footer>
);

export default Footer;
