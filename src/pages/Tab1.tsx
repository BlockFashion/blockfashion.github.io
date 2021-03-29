import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton } from '@ionic/react';
import { RouteComponentProps } from 'react-router-dom';
import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';

const Tab1: React.FC<RouteComponentProps> = (props) => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tab 1</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 1</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name="Tab 1 page" />
        <IonButton
            size="large"
            onClick={e => {
                e.preventDefault();
                props.history.push('/home');
            }}>
            Home
        </IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
