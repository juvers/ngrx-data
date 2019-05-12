import { EntityMetadataMap } from 'ngrx-data';

const entityMetatdata: EntityMetadataMap = {
    Hero: {},
    Villian: {}
};

const pluralNames = {
    Hero: 'Heroes'
};

export const entityConfig = {
    entityMetatdata,
    pluralNames
};