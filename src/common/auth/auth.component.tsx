export const Auth = () => {
  return (
    <div
      className={'h-[100vh] flex flex-col gap-6 items-center justify-center'}
    >
      <div className={'flex flex-col gap-2'}>
        <span className={'text-[#43250E] font-semibold text-8xl line-through'}>
          Notion
        </span>
        <span className={'text-[#9A7454] font-semibold text-4xl'}>
          {"Notes that aren't blocked"}
        </span>
      </div>

      <div className={'bg-[#F6EEDD] p-4 rounded-xl w-96'}>
        <form className={'flex flex-col gap-4'}>
          <div className={'flex flex-col gap-2'}>
            <input
              className={'bg-[#FDF9EB] p-2 rounded-xl w-full h-12'}
              placeholder={'Почта'}
            />

            <input
              className={'bg-[#FDF9EB] p-2 rounded-xl w-full h-12'}
              placeholder={'Пароль'}
              type={'password'}
            />
          </div>

          <button
            className={
              'bg-[#43250E] text-center p-2 rounded-xl text-white w-full h-12'
            }
          >
            Войти
          </button>
        </form>
      </div>
    </div>
  );
};
