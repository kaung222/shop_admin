type BadgeProps = {
  badge: number;
  children: React.ReactNode;
};
const Badge = ({ badge, children }: BadgeProps) => {
  return (
    <div className=" relative">
      <p className="absolute -top-1 -right-1 text-red-500 font-semibold">
        {badge}
      </p>
      {children}
    </div>
  );
};

export default Badge;
