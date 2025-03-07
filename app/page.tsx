import Image from 'next/image';
import { Button } from '@/components/shadcn';

export default function Landing() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen h-full py-10 ">
      <nav className="fixed top-3 w-96 ">
        <h1 className="text-white text-2xl font-bold">Onstep</h1>
      </nav>

      <main className="flex flex-col-reverse md:flex-col items-center justify-center h-full">
        <Image priority src={'/hero.svg'} alt="next" width={350} height={350} className="w-96" />
        <div>
          <h3 className="text-white text-xl mb-5">성공을 향한 첫걸음, 함께 걸어요.</h3>
          <Button className="w-96 py-8 bg-orange-600 text-xl cursor-pointer">
            Onstep 시작하기
          </Button>
        </div>
      </main>
    </div>
  );
}
