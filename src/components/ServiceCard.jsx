export default function ServiceCard({ imageSrc, title, description, isVisible }) {
  return (
    <div
      className="md:w-[23%] h-[428px] 2xl:h-[528px] relative p-7 transition-all duration-1000"
      style={{
        transform: isVisible ? "rotateY(0deg)" : "rotateY(90deg)",
        transformStyle: "preserve-3d",
        opacity: isVisible ? 1 : 0,
      }}
    >
      <img
        alt={title}
        className="absolute top-0 left-0 h-full w-full object-cover"
        src={imageSrc}
      />
      <div className="absolute flex flex-col gap-4">
        <h3 className="text-xl font-bold z-10 text-white">{title}</h3>
        <p className="text-lg font-medium leading-7 text-white">{description}</p>
      </div>
    </div>
  );
}
