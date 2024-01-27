// eslint-disable-next-line react/prop-types
export default function AsideCard({ title, logo }) {
  return (
    <>
      <li>
        <a
          className="flex items-center space-x-2 px-5 py-3.5 rounded-lg bg-primary text-black"
          href="#"
        >
          <img src={logo} width="24" height="24" alt="" />
          <span>{title}</span>
        </a>
      </li>
    </>
  );
}
