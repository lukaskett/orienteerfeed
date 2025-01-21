import React from 'react';
import { useTranslation } from 'react-i18next';
import { AiOutlinePlus } from 'react-icons/ai';
import { EventPageLayout } from '../../templates';

import { Alert, SubmitButton } from '../../organisms';
import { EventList } from './EventList';
import { Button } from 'src/atoms';
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogFooter,
} from 'src/organisms/Dialog';
import { EventForm } from '.';
import { useAuth } from '../..//utils';

const CreateEventDialog = ({ t, initialData = null }) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>
          <AiOutlinePlus className="mr-2" />
          {t('Pages.Event.Oprations.CreateEvent')}
        </Button>
      </DialogTrigger>
      <DialogContent
        title={
          initialData
            ? t('Pages.Event.Oprations.EditEvent')
            : t('Pages.Event.Oprations.CreateEvent')
        }
        description={
          initialData
            ? t('Pages.Event.Oprations.EditDescription')
            : t('Pages.Event.Oprations.CreateDescription')
        }
      >
        <EventForm
          t={t}
          initialData={initialData}
          renderSubmitButton={({ isSubmitting }) => (
            <DialogFooter>
              <SubmitButton isSubmitting={isSubmitting}>
                {t('Operations.Submit', { ns: 'common' })}
              </SubmitButton>
            </DialogFooter>
          )}
        />
      </DialogContent>
    </Dialog>
  );
};

export const EventPage = () => {
  const { t } = useTranslation();
  const { token } = useAuth();

  return (
    <EventPageLayout t={t}>
      <div className="grid items-start gap-8">
        <div className="flex flex-col gap-1 items-center">
          <h1 className="text-3xl md:text-4xl">{t('Route.Events')}</h1>
          <p className="text-lg text-muted-foreground">
            {t('Pages.Event.Description')}
          </p>
        </div>
        <hr />
        <Alert
          severity="warning"
          title={t('Pages.Event.Alert.DemoTitle')}
          className="!pl-14"
        >
          {t('Pages.Event.Alert.DemoDescription')}
        </Alert>
        {typeof token !== 'undefined' && token && (
          <div className="flex justify-end">
            <CreateEventDialog t={t} />
          </div>
        )}
        <EventList />
      </div>
    </EventPageLayout>
  );
};
