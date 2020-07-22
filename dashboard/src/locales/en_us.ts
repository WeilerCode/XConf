import { Locale } from './interface';
import enUS from 'antd/lib/locale/en_US';

const locale: Locale = {
  lng: 'en_us',
  langs: ['en', 'en_us', 'en_US'],
  languageLabel: 'English',
  antLocale: enUS,
  value: {
    'layout.title': '分布式配置中心',
    'layout.subTit': 'XConf',
    'layout.ownership': 'Micro China open source technology',

    'label.released': 'released',
    'label.unreleased': 'unreleased',
    'label.loading': 'Try to load.',

    'menus.apps': 'Applications',
    'menus.clusters': 'Clusters',
    'menus.github': 'Source',

    'empty.desc': 'No description',

    'card.app': 'My app',
    'card.app.create': 'Create App',
    'card.app.title': 'App',
    'card.cluster.create': 'Create Cluster',
    'card.cluster.title': 'Cluster',
    'card.namespace.title': 'Namespace',
    'card.namespace.create': 'Create Namespace',

    'table.filter': 'Keyword',
    'table.filter.placeholder': 'Keyword filtering',
    'table.filter_clear_button': 'Clear',
    'table.columns.app': 'App',
    'table.columns.cluster': 'Cluster',
    'table.columns.namespace': 'Namespace',
    'table.columns.comment': 'Explain',
    'table.columns.desc': 'Description',
    'table.columns.status': 'Status',
    'table.columns.createdAt': 'CreatedAt',
    'table.columns.updatedAt': 'updatedAt',
    'table.columns.control': 'Control',
    'table.columns.control.view': 'View',
    'table.columns.control.history': 'History',
    'table.columns.control.import': 'Import',
    'table.columns.control.import.success': 'Import configuration success',
    'table.columns.control.import.failure': 'Import configuration failure',
    'table.columns.control.export': 'Export',
    'table.columns.control.rollback': 'Rollback',
    'table.columns.control.rollback.confirm': 'Confirm rollback',
    'table.columns.control.rollback.success': 'Rollback success',
    'table.columns.control.rollback.failure': 'Rollback failure',
    'table.columns.control.remove': 'Delete',
    'table.columns.control.remove.success': 'Delete success',
    'table.columns.control.remove.failure': 'Delete failure',
    'table.columns.control.remove.confirm.app': 'Do you want to delete this application?',
    'table.columns.control.remove.confirm.cluster': 'Do you want to delete this cluster?',
    'table.columns.control.remove.confirm.namespace': 'Do you want to delete this namespace?',

    'form.creation.appName': 'App name',
    'form.creation.appName.validation': 'App name cannot be empty',
    'form.creation.appName.placeholder': 'Please enter the app name',
    'form.creation.clusterName': 'Cluster name',
    'form.creation.clusterName.validation': 'Cluster name cannot be empty',
    'form.creation.clusterName.placeholder': 'Please enter the cluster name',
    'form.creation.namespace': 'Namespace name',
    'form.creation.namespace.validation': 'Namespace name cannot be empty',
    'form.creation.namespace.placeholder': 'Please enter the namespace name',
    'form.creation.format': 'Format',
    'form.creation.format.validation': 'Format cannot be empty',
    'form.creation.format.validation.failure': 'Format error',
    'form.creation.status': 'Status',
    'form.creation.status.validation': 'Status cannot be empty',
    'form.creation.configuration': 'Configuration',
    'form.creation.configuration.validation': 'Configuration cannot be empty',
    'form.creation.tag': 'tag',
    'form.creation.tag.validation': 'Tag is required',
    'form.creation.tag.placeholder': 'Please enter the tag',
    'form.creation.comment': 'Note',
    'form.creation.comment.validation': 'Note cannot be empty',
    'form.creation.comment.placeholder': 'Please enter the note',

    'form.creation.desc': 'Description',
    'form.creation.desc.placeholder': 'Please enter the description',

    'form.creation.button.sure': 'Create',
    'form.creation.button.cancel': 'Cancel',
    'form.creation.button.save': 'Save',
    'form.creation.button.release': 'Release',
    'form.creation.app.success': 'Create application success',
    'form.creation.app.failure': 'Create application failure',
    'form.creation.cluster.success': 'Create cluster success',
    'form.creation.cluster.failure': 'Create cluster failure',
    'form.creation.namespace.failure': 'Create namespace failure',
    'form.creation.namespace.save.success': 'Save configuration success',
    'form.creation.namespace.save.failure': 'Save configuration failure',
    'form.creation.namespace.release.success': 'Release configuration success',
  },
};

export default locale;
