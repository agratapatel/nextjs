import Image from "next/image";

interface ImageComponentProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  title?: string;
}

const ImageComponent: React.FC<ImageComponentProps> = ({
  src,
  alt,
  width = 1170,
  height = 2532,
  title,
}) => {
  return (
    <div className="flex shrink-0 flex-col gap-1.5">
      <div className="h-[480px] lg:h-[512px] overflow-hidden shadow-sm rounded-2xl border border-gray-200">
        <Image
          alt={alt}
          loading="lazy"
          width={width}
          height={height}
          className="object-cover"
          src={src}
          style={{ color: "transparent", width: "auto", height: "100%" }}
        />
      </div>
      <h3 className="text-xs text-muted-foreground">{title}</h3>
    </div>
  );
};

export default ImageComponent;
