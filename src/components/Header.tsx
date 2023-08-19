interface HeaderProps {
  title: string;
  content: string;
}
const Header = ({ title, content }: HeaderProps) => {
  return (
    <div className="flex flex-col gap-4 md:gap-[11px] md:w-[525px]">
      <h1
        className="text-white text-center md:text-start text-[28px] md:text-[50px]
       font-bold leading-9 md:leading-[55px] tracking-[-0.3px] md:tracking-[-0.5px]"
      >
        {title}
      </h1>
      <p className="text-center md:text-start text-white font-medium leading-6">
        {content}
      </p>
    </div>
  );
};

export default Header;
