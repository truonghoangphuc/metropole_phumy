import type { Schema, Struct } from '@strapi/strapi';

export interface ContentBlockAppartment extends Struct.ComponentSchema {
  collectionName: 'components_content_block_appartments';
  info: {
    displayName: 'Block Apartment';
    icon: 'house';
  };
  attributes: {
    Apartments: Schema.Attribute.Component<'list.appartment', true>;
    Background: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    DetailShowForm: Schema.Attribute.Boolean &
      Schema.Attribute.DefaultTo<false>;
    DetailText: Schema.Attribute.String;
    ListingText: Schema.Attribute.String;
    MainPhoto: Schema.Attribute.Component<'content.rich-photo', false>;
    ShowMainPhoto: Schema.Attribute.Boolean;
    Tag: Schema.Attribute.String;
  };
}

export interface ContentBlockCards extends Struct.ComponentSchema {
  collectionName: 'components_content_block_cards';
  info: {
    displayName: 'Block Cards';
    icon: 'apps';
  };
  attributes: {
    Heading: Schema.Attribute.Component<'content.heading', false>;
    Items: Schema.Attribute.Component<'content.card', true>;
    Setting: Schema.Attribute.Component<'content.block-setting', false>;
    SubHeading: Schema.Attribute.Component<'content.heading', false>;
    Type: Schema.Attribute.Enumeration<
      ['Card Border', 'Card Normal', 'Card Icon', 'Card Overlay']
    >;
  };
}

export interface ContentBlockForm extends Struct.ComponentSchema {
  collectionName: 'components_content_block_forms';
  info: {
    displayName: 'Block Form';
    icon: 'folder';
  };
  attributes: {
    Form: Schema.Attribute.Component<'form.form', false>;
    Heading: Schema.Attribute.Component<'content.heading', false>;
    Setting: Schema.Attribute.Component<'content.block-setting', false>;
    SubHeading: Schema.Attribute.Component<'content.heading', false>;
  };
}

export interface ContentBlockListing extends Struct.ComponentSchema {
  collectionName: 'components_content_block_listings';
  info: {
    displayName: 'Block Listing';
    icon: 'apps';
  };
  attributes: {
    Building: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    CTAs: Schema.Attribute.Component<'menus.menu-item', true> &
      Schema.Attribute.SetMinMax<
        {
          max: 2;
        },
        number
      >;
    Description: Schema.Attribute.Blocks;
    Heading: Schema.Attribute.Component<'content.heading', false>;
    Listing: Schema.Attribute.Component<'list.row-cells', true>;
    Setting: Schema.Attribute.Component<'content.block-setting', false>;
    SubHeading: Schema.Attribute.Component<'content.heading', false>;
  };
}

export interface ContentBlockLogoVideo extends Struct.ComponentSchema {
  collectionName: 'components_content_block_logo_videos';
  info: {
    displayName: 'Block Logo Video';
    icon: 'chartBubble';
  };
  attributes: {
    Description: Schema.Attribute.Blocks;
    Heading: Schema.Attribute.Component<'content.heading', false>;
    Logos: Schema.Attribute.Component<'content.rich-photo', true>;
    Setting: Schema.Attribute.Component<'content.block-setting', false>;
    SubHeading: Schema.Attribute.Component<'content.heading', false>;
    Video: Schema.Attribute.Media<'videos'>;
    VideoPoster: Schema.Attribute.Media<'images'>;
  };
}

export interface ContentBlockMap extends Struct.ComponentSchema {
  collectionName: 'components_content_block_maps';
  info: {
    displayName: 'Block Map';
    icon: 'globe';
  };
  attributes: {
    Cards: Schema.Attribute.Component<'content.card', true>;
    Heading: Schema.Attribute.Component<'content.heading', false>;
    Map: Schema.Attribute.Media<'images'>;
    MapBuilding: Schema.Attribute.Media<'images'>;
    Setting: Schema.Attribute.Component<'content.block-setting', false>;
    SubHeading: Schema.Attribute.Component<'content.heading', false>;
  };
}

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
    IsHeroBanner: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    TextColor: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::color-picker.color'>;
  };
}

export interface ContentBlockTable extends Struct.ComponentSchema {
  collectionName: 'components_content_block_tables';
  info: {
    displayName: 'Block Table';
    icon: 'server';
  };
  attributes: {
    CTA: Schema.Attribute.Component<'menus.menu-item', false>;
    Description: Schema.Attribute.Blocks;
    Heading: Schema.Attribute.Component<'content.heading', false>;
    Setting: Schema.Attribute.Component<'content.block-setting', false>;
    SubHeading: Schema.Attribute.Component<'content.heading', false>;
    Table: Schema.Attribute.Component<'list.row-cells', true>;
    Video: Schema.Attribute.Media<'videos'>;
    VideoPoster: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
  };
}

export interface ContentBlockTabs extends Struct.ComponentSchema {
  collectionName: 'components_content_block_tabs';
  info: {
    displayName: 'Block Tabs';
    icon: 'apps';
  };
  attributes: {
    Description: Schema.Attribute.Blocks;
    Heading: Schema.Attribute.Component<'content.heading', false>;
    Setting: Schema.Attribute.Component<'content.block-setting', false>;
    SubHeading: Schema.Attribute.Component<'content.heading', false>;
    Tabs: Schema.Attribute.Component<'content.tab-item', true>;
  };
}

export interface ContentCard extends Struct.ComponentSchema {
  collectionName: 'components_content_cards';
  info: {
    displayName: 'Card';
    icon: 'book';
  };
  attributes: {
    BorderColor: Schema.Attribute.Component<'setting.gradient-setting', false>;
    CTAs: Schema.Attribute.Component<'menus.menu-item', true>;
    Description: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<'plugin::tinymce.tinymce'>;
    Icon: Schema.Attribute.Media<'images'>;
    Image: Schema.Attribute.Media<'images'>;
    SubTitle: Schema.Attribute.String;
    Title: Schema.Attribute.String;
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
    Descriptiom: Schema.Attribute.Blocks;
    Heading: Schema.Attribute.Component<'content.heading', false>;
    Layout: Schema.Attribute.Enumeration<['slides', 'grid']> &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'slides'>;
    Photos: Schema.Attribute.Component<'content.rich-photo', true>;
    Rows: Schema.Attribute.Component<'content.row-photo', true> &
      Schema.Attribute.SetMinMax<
        {
          max: 4;
        },
        number
      >;
    Setting: Schema.Attribute.Component<'content.block-setting', false>;
    SubHeading: Schema.Attribute.Component<'content.heading', false>;
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
    ColorEnd: Schema.Attribute.String &
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

export interface ContentPopup extends Struct.ComponentSchema {
  collectionName: 'components_content_popups';
  info: {
    displayName: 'Popup';
    icon: 'book';
  };
  attributes: {};
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
    Description: Schema.Attribute.Blocks;
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
    Description: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<'plugin::tinymce.tinymce'>;
    Heading: Schema.Attribute.Component<'content.heading', false>;
    MediaPosition: Schema.Attribute.Enumeration<
      ['left', 'right', 'background']
    > &
      Schema.Attribute.DefaultTo<'left'>;
    SubHeading: Schema.Attribute.Component<'content.heading', false>;
  };
}

export interface ContentTabItem extends Struct.ComponentSchema {
  collectionName: 'components_content_tab_items';
  info: {
    displayName: 'TabItem';
    icon: 'grid';
  };
  attributes: {
    Apartments: Schema.Attribute.Component<'content.block-appartment', false>;
    Card: Schema.Attribute.Component<'content.block-cards', false>;
    CTA: Schema.Attribute.Component<'menus.menu-item', false>;
    Gallery: Schema.Attribute.Component<'content.gallery', false>;
    Icon: Schema.Attribute.Media<'images'>;
    Name: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique;
    Photos: Schema.Attribute.Media<'images', true>;
    PopupCTAs: Schema.Attribute.Component<'menus.menu-item', true>;
    Title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface FormForm extends Struct.ComponentSchema {
  collectionName: 'components_form_forms';
  info: {
    displayName: 'Form';
    icon: 'dashboard';
  };
  attributes: {
    DocumentLogos: Schema.Attribute.Media<'images', true>;
    DocumentText: Schema.Attribute.String;
    Inputs: Schema.Attribute.Component<'form.input', true>;
    Name: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique;
    Setting: Schema.Attribute.Component<'setting.color', false>;
    Submit: Schema.Attribute.String;
  };
}

export interface FormInput extends Struct.ComponentSchema {
  collectionName: 'components_form_inputs';
  info: {
    displayName: 'Input';
    icon: 'pencil';
  };
  attributes: {
    Checked: Schema.Attribute.Boolean;
    CSS: Schema.Attribute.String;
    ErrorMessage: Schema.Attribute.String;
    Icon: Schema.Attribute.Media<'images'>;
    Label: Schema.Attribute.String;
    Name: Schema.Attribute.String;
    Options: Schema.Attribute.Component<'form.option', true>;
    RegExpValidation: Schema.Attribute.String;
    Require: Schema.Attribute.Boolean;
    RequireMessage: Schema.Attribute.String;
    Selected: Schema.Attribute.Boolean;
    Type: Schema.Attribute.Enumeration<
      [
        'text',
        'number',
        'tel',
        'email',
        'date',
        'textarea',
        'radio',
        'checkbox',
        'select',
      ]
    >;
    Value: Schema.Attribute.String;
  };
}

export interface FormOption extends Struct.ComponentSchema {
  collectionName: 'components_form_options';
  info: {
    displayName: 'Option';
    icon: 'bulletList';
  };
  attributes: {
    Title: Schema.Attribute.String;
    Value: Schema.Attribute.String;
  };
}

export interface ListAppartment extends Struct.ComponentSchema {
  collectionName: 'components_list_appartments';
  info: {
    displayName: 'Apartment';
    icon: 'house';
  };
  attributes: {
    Gallery: Schema.Attribute.Media<'images', true>;
    HomeFloor: Schema.Attribute.String;
    HomeKey: Schema.Attribute.String;
    HomeKeyPlan: Schema.Attribute.Media<'images'>;
    HomeSize: Schema.Attribute.String;
    HomeSizeIn: Schema.Attribute.String;
    HomeSizeOut: Schema.Attribute.String;
    Photo: Schema.Attribute.Media<'images'>;
    Title: Schema.Attribute.String;
  };
}

export interface ListBlockHeading extends Struct.ComponentSchema {
  collectionName: 'components_list_block_headings';
  info: {
    displayName: 'BlockHeading';
    icon: 'hashtag';
  };
  attributes: {
    Description: Schema.Attribute.Blocks;
    Items: Schema.Attribute.Component<'list.item', true>;
    Name: Schema.Attribute.String;
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
    Type: Schema.Attribute.Enumeration<
      ['Text', 'Email', 'Phone', 'Map', 'Web']
    >;
    Value: Schema.Attribute.String;
  };
}

export interface ListRowCells extends Struct.ComponentSchema {
  collectionName: 'components_list_row_cells';
  info: {
    displayName: 'RowCells';
    icon: 'apps';
  };
  attributes: {
    Content: Schema.Attribute.Blocks;
    Label: Schema.Attribute.String;
  };
}

export interface MenusFloatingMenu extends Struct.ComponentSchema {
  collectionName: 'components_menus_floating_menus';
  info: {
    displayName: 'FloatingMenu';
    icon: 'bulletList';
  };
  attributes: {
    Items: Schema.Attribute.Component<'menus.menu-item', true>;
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
    DefaultColor: Schema.Attribute.Component<'setting.color', false>;
    Heading: Schema.Attribute.Component<'content.heading', false>;
    Items: Schema.Attribute.Component<'menus.menu-item', true>;
    ScrollColor: Schema.Attribute.Component<'setting.color', false>;
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
    Icon: Schema.Attribute.Media<'images'>;
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
    Type: Schema.Attribute.Enumeration<['normal', 'icon', 'mixed', 'button']>;
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

export interface SettingGradientColor extends Struct.ComponentSchema {
  collectionName: 'components_setting_gradient_colors';
  info: {
    displayName: 'GradientColor';
    icon: 'brush';
  };
  attributes: {
    Color: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::color-picker.color'>;
    Percent: Schema.Attribute.Float &
      Schema.Attribute.SetMinMax<
        {
          max: 100;
          min: 0;
        },
        number
      >;
  };
}

export interface SettingGradientSetting extends Struct.ComponentSchema {
  collectionName: 'components_setting_gradient_settings';
  info: {
    displayName: 'GradientSetting';
    icon: 'brush';
  };
  attributes: {
    Colors: Schema.Attribute.Component<'setting.gradient-color', true>;
    Degree: Schema.Attribute.Float;
    Type: Schema.Attribute.Enumeration<['linear', 'radial']>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'content.block-appartment': ContentBlockAppartment;
      'content.block-cards': ContentBlockCards;
      'content.block-form': ContentBlockForm;
      'content.block-listing': ContentBlockListing;
      'content.block-logo-video': ContentBlockLogoVideo;
      'content.block-map': ContentBlockMap;
      'content.block-setting': ContentBlockSetting;
      'content.block-table': ContentBlockTable;
      'content.block-tabs': ContentBlockTabs;
      'content.card': ContentCard;
      'content.gallery': ContentGallery;
      'content.heading': ContentHeading;
      'content.popup': ContentPopup;
      'content.rich-photo': ContentRichPhoto;
      'content.row-photo': ContentRowPhoto;
      'content.rte': ContentRte;
      'content.tab-item': ContentTabItem;
      'form.form': FormForm;
      'form.input': FormInput;
      'form.option': FormOption;
      'list.appartment': ListAppartment;
      'list.block-heading': ListBlockHeading;
      'list.item': ListItem;
      'list.row-cells': ListRowCells;
      'menus.floating-menu': MenusFloatingMenu;
      'menus.menu': MenusMenu;
      'menus.menu-item': MenusMenuItem;
      'seo.meta-tag': SeoMetaTag;
      'seo.open-graph': SeoOpenGraph;
      'seo.structure-data': SeoStructureData;
      'setting.color': SettingColor;
      'setting.gradient-color': SettingGradientColor;
      'setting.gradient-setting': SettingGradientSetting;
    }
  }
}
