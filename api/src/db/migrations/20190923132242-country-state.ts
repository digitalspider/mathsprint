'use strict';

import { QueryInterface, Sequelize, Op } from "sequelize";
import { sequelize } from "..";

module.exports = {
  up: (queryInterface: QueryInterface, Sequelize: Sequelize) => {
    const promises: Promise<object>[] = [];
    const {Country, State} = sequelize.models;
    promises.push(
      queryInterface.bulkInsert(Country.tableName, [
        {key: 'AU', value: 'Australia'},
        {key: 'AF', value: 'Afghanistan'},
        {key: 'AL', value: 'Albania'},
        {key: 'DZ', value: 'Algeria'},
        {key: 'AS', value: 'American Samoa'},
        {key: 'AD', value: 'Andorra'},
        {key: 'AO', value: 'Angola'},
        {key: 'AI', value: 'Anguilla'},
        {key: 'AQ', value: 'Antarctica'},
        {key: 'AG', value: 'Antigua and Barbuda'},
        {key: 'AR', value: 'Argentina'},
        {key: 'AM', value: 'Armenia'},
        {key: 'AW', value: 'Aruba'},
        {key: 'AT', value: 'Austria'},
        {key: 'AX', value: 'Åland Islands'},
        {key: 'AZ', value: 'Azerbaijan'},
        {key: 'BS', value: 'Bahamas'},
        {key: 'BH', value: 'Bahrain'},
        {key: 'BD', value: 'Bangladesh'},
        {key: 'BB', value: 'Barbados'},
        {key: 'BY', value: 'Belarus'},
        {key: 'BE', value: 'Belgium'},
        {key: 'BZ', value: 'Belize'},
        {key: 'BJ', value: 'Benin'},
        {key: 'BM', value: 'Bermuda'},
        {key: 'BT', value: 'Bhutan'},
        {key: 'BO', value: 'Bolivia'},
        {key: 'BQ', value: 'Bonaire, Sint Eustatius and Saba'},
        {key: 'BA', value: 'Bosnia and Herzegovina'},
        {key: 'BW', value: 'Botswana'},
        {key: 'BV', value: 'Bouvet Island'},
        {key: 'BR', value: 'Brazil'},
        {key: 'IO', value: 'British Indian Ocean Territory'},
        {key: 'BN', value: 'Brunei Darussalam'},
        {key: 'BG', value: 'Bulgaria'},
        {key: 'BF', value: 'Burkina Faso'},
        {key: 'BI', value: 'Burundi'},
        {key: 'CV', value: 'Cabo Verde'},
        {key: 'KH', value: 'Cambodia'},
        {key: 'CM', value: 'Cameroon'},
        {key: 'CA', value: 'Canada'},
        {key: 'KY', value: 'Cayman Islands'},
        {key: 'CF', value: 'Central African Republic'},
        {key: 'TD', value: 'Chad'},
        {key: 'CL', value: 'Chile'},
        {key: 'CN', value: 'China'},
        {key: 'CX', value: 'Christmas Island'},
        {key: 'CC', value: 'Cocos Islands'},
        {key: 'CO', value: 'Colombia'},
        {key: 'KM', value: 'Comoros'},
        {key: 'CG', value: 'Congo'},
        {key: 'CK', value: 'Cook Islands'},
        {key: 'CR', value: 'Costa Rica'},
        {key: 'HR', value: 'Croatia'},
        {key: 'CU', value: 'Cuba'},
        {key: 'CW', value: 'Curaçao'},
        {key: 'CY', value: 'Cyprus'},
        {key: 'CZ', value: 'Czechia'},
        {key: 'CI', value: 'Côte dIvoire'},
        {key: 'DK', value: 'Denmark'},
        {key: 'DJ', value: 'Djibouti'},
        {key: 'DM', value: 'Dominica'},
        {key: 'DO', value: 'Dominican Republic'},
        {key: 'EC', value: 'Ecuador'},
        {key: 'EG', value: 'Egypt'},
        {key: 'SV', value: 'El Salvador'},
        {key: 'GQ', value: 'Equatorial Guinea'},
        {key: 'ER', value: 'Eritrea'},
        {key: 'EE', value: 'Estonia'},
        {key: 'SZ', value: 'Eswatini'},
        {key: 'ET', value: 'Ethiopia'},
        {key: 'FK', value: 'Falkland Islands'},
        {key: 'FO', value: 'Faroe Islands'},
        {key: 'FJ', value: 'Fiji'},
        {key: 'FI', value: 'Finland'},
        {key: 'FR', value: 'France'},
        {key: 'GF', value: 'French Guiana'},
        {key: 'PF', value: 'French Polynesia'},
        {key: 'TF', value: 'French Southern Territories'},
        {key: 'GA', value: 'Gabon'},
        {key: 'GM', value: 'Gambia'},
        {key: 'GE', value: 'Georgia'},
        {key: 'DE', value: 'Germany'},
        {key: 'GH', value: 'Ghana'},
        {key: 'GI', value: 'Gibraltar'},
        {key: 'GR', value: 'Greece'},
        {key: 'GL', value: 'Greenland'},
        {key: 'GD', value: 'Grenada'},
        {key: 'GP', value: 'Guadeloupe'},
        {key: 'GU', value: 'Guam'},
        {key: 'GT', value: 'Guatemala'},
        {key: 'GG', value: 'Guernsey'},
        {key: 'GN', value: 'Guinea'},
        {key: 'GW', value: 'Guinea-Bissau'},
        {key: 'GY', value: 'Guyana'},
        {key: 'HT', value: 'Haiti'},
        {key: 'HM', value: 'Heard Island and McDonald Islands'},
        {key: 'VA', value: 'Holy See'},
        {key: 'HN', value: 'Honduras'},
        {key: 'HK', value: 'Hong Kong'},
        {key: 'HU', value: 'Hungary'},
        {key: 'IS', value: 'Iceland'},
        {key: 'IN', value: 'India'},
        {key: 'ID', value: 'Indonesia'},
        {key: 'IR', value: 'Iran'},
        {key: 'IQ', value: 'Iraq'},
        {key: 'IE', value: 'Ireland'},
        {key: 'IM', value: 'Isle of Man'},
        {key: 'IL', value: 'Israel'},
        {key: 'IT', value: 'Italy'},
        {key: 'JM', value: 'Jamaica'},
        {key: 'JP', value: 'Japan'},
        {key: 'JE', value: 'Jersey'},
        {key: 'JO', value: 'Jordan'},
        {key: 'KZ', value: 'Kazakhstan'},
        {key: 'KE', value: 'Kenya'},
        {key: 'KI', value: 'Kiribati'},
        {key: 'KP', value: 'North Korea'},
        {key: 'KR', value: 'Korea'},
        {key: 'KW', value: 'Kuwait'},
        {key: 'KG', value: 'Kyrgyzstan'},
        {key: 'LA', value: 'Lao Peoples Democratic Republic'},
        {key: 'LV', value: 'Latvia'},
        {key: 'LB', value: 'Lebanon'},
        {key: 'LS', value: 'Lesotho'},
        {key: 'LR', value: 'Liberia'},
        {key: 'LY', value: 'Libya'},
        {key: 'LI', value: 'Liechtenstein'},
        {key: 'LT', value: 'Lithuania'},
        {key: 'LU', value: 'Luxembourg'},
        {key: 'MO', value: 'Macao'},
        {key: 'MG', value: 'Madagascar'},
        {key: 'MW', value: 'Malawi'},
        {key: 'MY', value: 'Malaysia'},
        {key: 'MV', value: 'Maldives'},
        {key: 'ML', value: 'Mali'},
        {key: 'MT', value: 'Malta'},
        {key: 'MH', value: 'Marshall Islands'},
        {key: 'MQ', value: 'Martinique'},
        {key: 'MR', value: 'Mauritania'},
        {key: 'MU', value: 'Mauritius'},
        {key: 'YT', value: 'Mayotte'},
        {key: 'MX', value: 'Mexico'},
        {key: 'FM', value: 'Micronesia'},
        {key: 'MD', value: 'Moldova'},
        {key: 'MC', value: 'Monaco'},
        {key: 'MN', value: 'Mongolia'},
        {key: 'ME', value: 'Montenegro'},
        {key: 'MS', value: 'Montserrat'},
        {key: 'MA', value: 'Morocco'},
        {key: 'MZ', value: 'Mozambique'},
        {key: 'MM', value: 'Myanmar'},
        {key: 'NA', value: 'Namibia'},
        {key: 'NR', value: 'Nauru'},
        {key: 'NP', value: 'Nepal'},
        {key: 'NL', value: 'Netherlands'},
        {key: 'NC', value: 'New Caledonia'},
        {key: 'NZ', value: 'New Zealand'},
        {key: 'NI', value: 'Nicaragua'},
        {key: 'NE', value: 'Niger'},
        {key: 'NG', value: 'Nigeria'},
        {key: 'NU', value: 'Niue'},
        {key: 'NF', value: 'Norfolk Island'},
        {key: 'MK', value: 'North Macedonia'},
        {key: 'MP', value: 'Northern Mariana Islands'},
        {key: 'NO', value: 'Norway'},
        {key: 'OM', value: 'Oman'},
        {key: 'PK', value: 'Pakistan'},
        {key: 'PW', value: 'Palau'},
        {key: 'PS', value: 'Palestine, State of'},
        {key: 'PA', value: 'Panama'},
        {key: 'PG', value: 'Papua New Guinea'},
        {key: 'PY', value: 'Paraguay'},
        {key: 'PE', value: 'Peru'},
        {key: 'PH', value: 'Philippines'},
        {key: 'PN', value: 'Pitcairn'},
        {key: 'PL', value: 'Poland'},
        {key: 'PT', value: 'Portugal'},
        {key: 'PR', value: 'Puerto Rico'},
        {key: 'QA', value: 'Qatar'},
        {key: 'RO', value: 'Romania'},
        {key: 'RU', value: 'Russian Federation'},
        {key: 'RW', value: 'Rwanda'},
        {key: 'RE', value: 'Réunion'},
        {key: 'BL', value: 'Saint Barthélemy'},
        {key: 'SH', value: 'Saint Helena'},
        {key: 'KN', value: 'Saint Kitts and Nevis'},
        {key: 'LC', value: 'Saint Lucia'},
        {key: 'MF', value: 'Saint Martin (French part)'},
        {key: 'PM', value: 'Saint Pierre and Miquelon'},
        {key: 'VC', value: 'Saint Vincent and the Grenadines'},
        {key: 'WS', value: 'Samoa'},
        {key: 'SM', value: 'San Marino'},
        {key: 'ST', value: 'Sao Tome and Principe'},
        {key: 'SA', value: 'Saudi Arabia'},
        {key: 'SN', value: 'Senegal'},
        {key: 'RS', value: 'Serbia'},
        {key: 'SC', value: 'Seychelles'},
        {key: 'SL', value: 'Sierra Leone'},
        {key: 'SG', value: 'Singapore'},
        {key: 'SX', value: 'Sint Maarten (Dutch part)'},
        {key: 'SK', value: 'Slovakia'},
        {key: 'SI', value: 'Slovenia'},
        {key: 'SB', value: 'Solomon Islands'},
        {key: 'SO', value: 'Somalia'},
        {key: 'ZA', value: 'South Africa'},
        {key: 'GS', value: 'South Georgia'},
        {key: 'SS', value: 'South Sudan'},
        {key: 'ES', value: 'Spain'},
        {key: 'LK', value: 'Sri Lanka'},
        {key: 'SD', value: 'Sudan'},
        {key: 'SR', value: 'Suriname'},
        {key: 'SJ', value: 'Svalbard and Jan Mayen'},
        {key: 'SE', value: 'Sweden'},
        {key: 'CH', value: 'Switzerland'},
        {key: 'SY', value: 'Syrian Arab Republic'},
        {key: 'TW', value: 'Taiwan'},
        {key: 'TJ', value: 'Tajikistan'},
        {key: 'TZ', value: 'Tanzania'},
        {key: 'TH', value: 'Thailand'},
        {key: 'TL', value: 'Timor-Leste'},
        {key: 'TG', value: 'Togo'},
        {key: 'TK', value: 'Tokelau'},
        {key: 'TO', value: 'Tonga'},
        {key: 'TT', value: 'Trinidad and Tobago'},
        {key: 'TN', value: 'Tunisia'},
        {key: 'TR', value: 'Turkey'},
        {key: 'TM', value: 'Turkmenistan'},
        {key: 'TC', value: 'Turks and Caicos Islands'},
        {key: 'TV', value: 'Tuvalu'},
        {key: 'UG', value: 'Uganda'},
        {key: 'UA', value: 'Ukraine'},
        {key: 'AE', value: 'United Arab Emirates'},
        {key: 'GB', value: 'United Kingdom'},
        {key: 'US', value: 'United States of America'},
        {key: 'UY', value: 'Uruguay'},
        {key: 'UZ', value: 'Uzbekistan'},
        {key: 'VU', value: 'Vanuatu'},
        {key: 'VE', value: 'Venezuela'},
        {key: 'VN', value: 'Viet Nam'},
        {key: 'VG', value: 'Virgin Islands (British)'},
        {key: 'VI', value: 'Virgin Islands (U.S.)'},
        {key: 'WF', value: 'Wallis and Futuna'},
        {key: 'EH', value: 'Western Sahara*'},
        {key: 'YE', value: 'Yemen'},
        {key: 'ZM', value: 'Zambia'},
        {key: 'ZW', value: 'Zimbabwe'},
      ])
    );
    promises.push(
      queryInterface.bulkInsert(State.tableName, [
        {key: 'NSW', value: 'New South Wales'},
        {key: 'QLD', value: 'Queensland'},
        {key: 'SA', value: 'South Australia'},
        {key: 'WA', value: 'Western Australia'},
        {key: 'NT', value: 'Northern Territory'},
        {key: 'VIC', value: 'Victoria'},
        {key: 'TAS', value: 'Tasmaina'},
        {key: 'OTHER', value: 'Other'},
      ])
    );
    return Promise.all(promises);
  },

  down: (queryInterface: QueryInterface, Sequelize: Sequelize) => {
    const promises: Promise<object>[] = [];
    const {Country, State} = sequelize.models;
    promises.push(
      queryInterface.bulkDelete(Country.tableName, {key: {[Op.like]: '%'}}),
      queryInterface.bulkDelete(State.tableName, {key: {[Op.like]: '%'}})
    );
    return Promise.all(promises);
  }
};
