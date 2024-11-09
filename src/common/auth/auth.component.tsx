import { useForm } from 'react-hook-form';
import { useAuth } from './auth.context.tsx';
import { useNavigate } from 'react-router-dom';

type Inputs = {
  email: string;
  password: string;
};

export const Auth = () => {
  const navigate = useNavigate();
  const { user, login } = useAuth();

  if (user) {
    navigate('/auth');
  }

  const { register, handleSubmit } = useForm<Inputs>();

  const onSubmit = handleSubmit(data => login(data.email, data.password));

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
        <form className={'flex flex-col gap-4'} onSubmit={onSubmit}>
          <div className={'flex flex-col gap-2'}>
            <input
              className={'bg-[#FDF9EB] p-2 rounded-xl w-full h-12'}
              placeholder={'Email'}
              {...register('email')}
            />

            <input
              className={'bg-[#FDF9EB] p-2 rounded-xl w-full h-12'}
              placeholder={'Password'}
              type={'password'}
              {...register('password')}
            />
          </div>

          <button
            className={
              'bg-[#43250E] text-center p-2 rounded-xl text-white w-full h-12'
            }
          >
            Sign in
          </button>
        </form>
      </div>
    </div>
  );
};
