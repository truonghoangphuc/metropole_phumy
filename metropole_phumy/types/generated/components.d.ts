import type { Schema, Struct } from '@strapi/strapi';

export interface ContentBlockSetting extends Struct.ComponentSchema {
  collectionName: 'components_content_block_settings';
  info: {
    description: '';
    displayName: 'Block Setting';
    icon: 'gift';
  };
  attributes: {
    BackgroundColor: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::color-picker.color'>;
    BackgroundImage: Schema.Attribute.Media<'images' | 'files' | 'videos'>;
    BackgroundImageMobile: Schema.Attribute.Media<
      'images' | 'files' | 'videos'
    >;
    CSS: Schema.Attribute.String;
    htmlID: Schema.Attribute.String &
      Schema.Attribute.Unique &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 50;
      }>;
    TextColor: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::color-picker.color'>;
  };
}

export interface ContentGallery extends Struct.ComponentSchema {
  collectionName: 'components_content_galleries';
  info: {
    description: '';
    displayName: 'Gallery';
    icon: 'landscape';
  };
  attributes: {
    Heading: Schema.Attribute.Component<'content.heading', false>;
    Layout: Schema.Attribute.Enumeration<['slides', 'grid']> &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'slides'>;
    Photos: Schema.Attribute.Component<'content.rich-photo', true>;
    Rows: Schema.Attribute.Component<'content.row-photo', true>;
    Setting: Schema.Attribute.Component<'content.block-setting', false>;
  };
}

export interface ContentHeading extends Struct.ComponentSchema {
  collectionName: 'components_content_headings';
  info: {
    description: '';
    displayName: 'Heading';
  };
  attributes: {
    Align: Schema.Attribute.Enumeration<['Left', 'Right', 'Center']>;
    Color: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::color-picker.color'>;
    Tag: Schema.Attribute.Enumeration<
      ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p']
    > &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'h2'>;
    Text: Schema.Attribute.String;
    Transform: Schema.Attribute.Enumeration<
      ['Capitalize', 'lowercase', 'UPPERCASE', 'none']
    > &
      Schema.Attribute.DefaultTo<'UPPERCASE'>;
  };
}

export interface ContentRichPhoto extends Struct.ComponentSchema {
  collectionName: 'components_content_rich_photos';
  info: {
    description: '';
    displayName: 'Rich Photo';
    icon: 'landscape';
  };
  attributes: {
    Caption: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 255;
      }>;
    Date: Schema.Attribute.Date;
    Description: Schema.Attribute.RichText;
    Image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    Link: Schema.Attribute.String;
  };
}

export interface ContentRowPhoto extends Struct.ComponentSchema {
  collectionName: 'components_content_row_photos';
  info: {
    displayName: 'Row Photo';
    icon: 'landscape';
  };
  attributes: {
    Items: Schema.Attribute.Component<'content.rich-photo', true> &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMax<
        {
          max: 4;
          min: 1;
        },
        number
      >;
  };
}

export interface ContentRte extends Struct.ComponentSchema {
  collectionName: 'components_content_rtes';
  info: {
    description: '';
    displayName: 'RTE';
    icon: 'cup';
  };
  attributes: {
    Background: Schema.Attribute.Component<'content.block-setting', false>;
    CTAs: Schema.Attribute.Component<'menus.menu-item', true>;
    Description: Schema.Attribute.Blocks;
    Heading: Schema.Attribute.Component<'content.heading', false>;
    MediaPosition: Schema.Attribute.Enumeration<
      ['left', 'right', 'background']
    > &
      Schema.Attribute.DefaultTo<'left'>;
    SubHeading: Schema.Attribute.Component<'content.heading', false>;
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
      'content.block-setting': ContentBlockSetting;
      'content.gallery': ContentGallery;
      'content.heading': ContentHeading;
      'content.rich-photo': ContentRichPhoto;
      'content.row-photo': ContentRowPhoto;
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
