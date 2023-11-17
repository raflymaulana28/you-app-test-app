type ContainersProps = {
  children: React.ReactNode;
};

export default function Containers(props: ContainersProps) {
  const { children } = props;
  return (
    <div className='flex w-full justify-center'>
      <div className='min-h-screen w-full max-w-[450px] bg-[radial-gradient(124.23%_171.99%_at_100%_-3.39%,_#1F4247_0%,_#0D1D23_56.18%,_#09141A_100%)]'>
        {children}
      </div>
    </div>
  );
}
