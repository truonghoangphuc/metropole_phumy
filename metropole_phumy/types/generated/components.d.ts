import type { Schema, Struct } from '@strapi/strapi';

export interface ContentRte extends Struct.ComponentSchema {
  collectionName: 'components_content_rtes';
  info: {
    displayName: 'RTE';
    icon: 'cup';
  };
  attributes: {
    Color: Schema.Attribute.Component<'setting.color', true>;
    Description: Schema.Attribute.Blocks;
    Heading: Schema.Attribute.String;
    Images: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    MediaPosition: Schema.Attribute.Enumeration<
      ['left', 'right', 'overlap-1', 'overlap-2']
    >;
    SubHeading: Schema.Attribute.String;
  };
}

export interface ListBlockHeading extends Struct.ComponentSchema {
  collectionName: 'components_list_block_headings';
  info: {
    displayName: 'BlockHeading';
    icon: 'hashtag';
  };
  attributes: {
    Items: Schema.Attribute.Component<'list.item', true>;
    Title: Schema.Attribute.String;
  };
}

export interface ListItem extends Struct.ComponentSchema {
  collectionName: 'components_list_items';
  info: {
    displayName: 'Item';
    icon: 'bulletList';
  };
  attributes: {
    Label: Schema.Attribute.String;
    Type: Schema.Attribute.Enumeration<['Text', 'Email', 'Phone']>;
    Value: Schema.Attribute.String;
  };
}

export interface MenusMenu extends Struct.ComponentSchema {
  collectionName: 'components_menus_menus';
  info: {
    description: '';
    displayName: 'Menu';
    icon: 'bulletList';
  };
  attributes: {
    Items: Schema.Attribute.Component<'menus.menu-item', true>;
  };
}

export interface MenusMenuItem extends Struct.ComponentSchema {
  collectionName: 'components_menus_menu_items';
  info: {
    description: '';
    displayName: 'Menu Item';
    icon: 'link';
  };
  attributes: {
    CSS: Schema.Attribute.String;
    Slug: Schema.Attribute.String & Schema.Attribute.Required;
    Target: Schema.Attribute.Enumeration<
      ['_blank', '_self', '_parent', '_top']
    > &
      Schema.Attribute.DefaultTo<'_blank'>;
    Title: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 255;
      }>;
    Type: Schema.Attribute.Enumeration<['normal', 'icon', 'mixed']>;
  };
}

export interface SeoMetaTag extends Struct.ComponentSchema {
  collectionName: 'components_seo_meta_tags';
  info: {
    displayName: 'Meta Tag';
    icon: 'apps';
  };
  attributes: {
    Description: Schema.Attribute.Text;
    Keywords: Schema.Attribute.String;
    Title: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 250;
      }>;
  };
}

export interface SeoOpenGraph extends Struct.ComponentSchema {
  collectionName: 'components_seo_open_graphs';
  info: {
    displayName: 'Open Graph';
    icon: 'apps';
  };
  attributes: {
    image: Schema.Attribute.Media<'images'>;
    Title: Schema.Attribute.String;
    type: Schema.Attribute.String;
    url: Schema.Attribute.String;
  };
}

export interface SeoStructureData extends Struct.ComponentSchema {
  collectionName: 'components_seo_structure_data';
  info: {
    displayName: 'Structure Data';
  };
  attributes: {
    Content: Schema.Attribute.JSON;
  };
}

export interface SettingColor extends Struct.ComponentSchema {
  collectionName: 'components_setting_colors';
  info: {
    displayName: 'Color';
    icon: 'paint';
  };
  attributes: {
    BGColor: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::color-picker.color'>;
    TextColor: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::color-picker.color'>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'content.rte': ContentRte;
      'list.block-heading': ListBlockHeading;
      'list.item': ListItem;
      'menus.menu': MenusMenu;
      'menus.menu-item': MenusMenuItem;
      'seo.meta-tag': SeoMetaTag;
      'seo.open-graph': SeoOpenGraph;
      'seo.structure-data': SeoStructureData;
      'setting.color': SettingColor;
    }
  }
}
