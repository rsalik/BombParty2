import alert from '../alert.svg';

interface Page404Props {}

export const Page404: React.FC<Page404Props> = () => {
  return (
    <div>
      <div className="title">
        BombParty <span>------------------------------------- v1.1</span>
      </div>
      <div className="section-404">
        <div className="warning static">
          <img src={alert} alt="warning" className="alert" />
          <div>
            <div>404</div>
            <span>The page was not found</span>
          </div>
        </div>
      </div>
    </div>
  );
};
