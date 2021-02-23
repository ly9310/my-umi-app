import { Redirect, IRouteComponentProps } from 'umi';

export default (props: IRouteComponentProps) => {
  let isLogin: boolean = false;
  if (!isLogin) {
    alert('需要登陆');
  }
  return <Redirect to="/" />;
}
