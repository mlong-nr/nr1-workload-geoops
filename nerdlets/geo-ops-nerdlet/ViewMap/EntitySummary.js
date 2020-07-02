import { get } from 'lodash';

const composeEntitySummary = activeMapLocation => {
  if (activeMapLocation) {
    const activeLocationEntities = get(activeMapLocation, 'entities', []);

    if (activeLocationEntities.length > 0) {
      return activeLocationEntities.map(entity => {
        return {
          name: entity.name,
          alertSeverity: entity.alertSeverity || 'NOT_CONFIGURED',
          type: entity.type,
          guid: entity.guid
        };
      });
    } else {
      return [
        {
          name: 'hi',
          alertSeverity: 'NOT_ALERTING',
          type: 'APPLICATION'
        }
      ];
    }
  } else {
    return [
      {
        name: 'hi',
        alertSeverity: 'NOT_ALERTING',
        type: 'APPLICATION'
      }
    ];
  }
};

export default composeEntitySummary;
