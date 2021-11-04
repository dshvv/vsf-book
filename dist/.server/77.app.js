"use strict";
exports.id = 77;
exports.ids = [77];
exports.modules = {

/***/ 76542:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "JO": () => (/* binding */ Icon)
/* harmony export */ });
/* unused harmony exports _api, addAPIProvider, addCollection, addIcon, buildIcon, calculateSize, disableCache, enableCache, getIcon, iconExists, listIcons, loadIcons, replaceIDs */
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(21666);


var name = {};

var icon = {};

(function (exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.fullIcon = exports.iconDefaults = exports.minifyProps = exports.matchName = void 0;
/**
 * Expression to test part of icon name.
 */
exports.matchName = /^[a-z0-9]+(-[a-z0-9]+)*$/;
/**
 * Properties that can be minified
 *
 * Values of all these properties are awalys numbers
 */
exports.minifyProps = [
    // All IconifyDimenisons properties
    'width',
    'height',
    'top',
    'left',
];
/**
 * Default values for all optional IconifyIcon properties
 */
exports.iconDefaults = Object.freeze({
    left: 0,
    top: 0,
    width: 16,
    height: 16,
    rotate: 0,
    vFlip: false,
    hFlip: false,
});
/**
 * Add optional properties to icon
 */
function fullIcon(data) {
    return { ...exports.iconDefaults, ...data };
}
exports.fullIcon = fullIcon;
}(icon));

(function (exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateIcon = exports.stringToIcon = void 0;
const _1 = icon;
/**
 * Convert string to Icon object.
 */
const stringToIcon = (value, validate, allowSimpleName, provider = '') => {
    const colonSeparated = value.split(':');
    // Check for provider with correct '@' at start
    if (value.slice(0, 1) === '@') {
        // First part is provider
        if (colonSeparated.length < 2 || colonSeparated.length > 3) {
            // "@provider:prefix:name" or "@provider:prefix-name"
            return null;
        }
        provider = colonSeparated.shift().slice(1);
    }
    // Check split by colon: "prefix:name", "provider:prefix:name"
    if (colonSeparated.length > 3 || !colonSeparated.length) {
        return null;
    }
    if (colonSeparated.length > 1) {
        // "prefix:name"
        const name = colonSeparated.pop();
        const prefix = colonSeparated.pop();
        const result = {
            // Allow provider without '@': "provider:prefix:name"
            provider: colonSeparated.length > 0 ? colonSeparated[0] : provider,
            prefix,
            name,
        };
        return validate && !exports.validateIcon(result) ? null : result;
    }
    // Attempt to split by dash: "prefix-name"
    const name = colonSeparated[0];
    const dashSeparated = name.split('-');
    if (dashSeparated.length > 1) {
        const result = {
            provider: provider,
            prefix: dashSeparated.shift(),
            name: dashSeparated.join('-'),
        };
        return validate && !exports.validateIcon(result) ? null : result;
    }
    // If allowEmpty is set, allow empty provider and prefix, allowing names like "home"
    if (allowSimpleName && provider === '') {
        const result = {
            provider: provider,
            prefix: '',
            name,
        };
        return validate && !exports.validateIcon(result, allowSimpleName)
            ? null
            : result;
    }
    return null;
};
exports.stringToIcon = stringToIcon;
/**
 * Check if icon is valid.
 *
 * This function is not part of stringToIcon because validation is not needed for most code.
 */
const validateIcon = (icon, allowSimpleName) => {
    if (!icon) {
        return false;
    }
    return !!((icon.provider === '' || icon.provider.match(_1.matchName)) &&
        ((allowSimpleName && icon.prefix === '') ||
            icon.prefix.match(_1.matchName)) &&
        icon.name.match(_1.matchName));
};
exports.validateIcon = validateIcon;
}(name));

var functions$3 = {};

var parse = {};

var merge = {};

Object.defineProperty(merge, "__esModule", { value: true });
merge.mergeIconData = void 0;
const _1$1 = icon;
/**
 * Merge icon and alias
 */
function mergeIconData(icon, alias) {
    const result = { ...icon };
    for (const key in _1$1.iconDefaults) {
        const prop = key;
        if (alias[prop] !== void 0) {
            const value = alias[prop];
            if (result[prop] === void 0) {
                // Missing value
                result[prop] = value;
                continue;
            }
            switch (prop) {
                case 'rotate':
                    result[prop] =
                        (result[prop] + value) % 4;
                    break;
                case 'hFlip':
                case 'vFlip':
                    result[prop] = value !== result[prop];
                    break;
                default:
                    // Overwrite value
                    result[prop] =
                        value;
            }
        }
    }
    return result;
}
merge.mergeIconData = mergeIconData;

Object.defineProperty(parse, "__esModule", { value: true });
parse.parseIconSet = void 0;
const icon_1$2 = icon;
const merge_1 = merge;
/**
 * Get list of defaults keys
 */
const defaultsKeys = Object.keys(icon_1$2.iconDefaults);
/**
 * Resolve alias
 */
function resolveAlias(alias, icons, aliases, level = 0) {
    const parent = alias.parent;
    if (icons[parent] !== void 0) {
        return merge_1.mergeIconData(icons[parent], alias);
    }
    if (aliases[parent] !== void 0) {
        if (level > 2) {
            // icon + alias + alias + alias = too much nesting, possibly infinite
            return null;
        }
        const icon = resolveAlias(aliases[parent], icons, aliases, level + 1);
        if (icon) {
            return merge_1.mergeIconData(icon, alias);
        }
    }
    return null;
}
/**
 * Extract icons from an icon set
 */
function parseIconSet(data, callback, list = 'none') {
    const added = [];
    // Must be an object
    if (typeof data !== 'object') {
        return list === 'none' ? false : added;
    }
    // Check for missing icons list returned by API
    if (data.not_found instanceof Array) {
        data.not_found.forEach((name) => {
            callback(name, null);
            if (list === 'all') {
                added.push(name);
            }
        });
    }
    // Must have 'icons' object
    if (typeof data.icons !== 'object') {
        return list === 'none' ? false : added;
    }
    // Get default values
    const defaults = Object.create(null);
    defaultsKeys.forEach((key) => {
        if (data[key] !== void 0 && typeof data[key] !== 'object') {
            defaults[key] = data[key];
        }
    });
    // Get icons
    const icons = data.icons;
    Object.keys(icons).forEach((name) => {
        const icon = icons[name];
        if (typeof icon.body !== 'string') {
            return;
        }
        // Freeze icon to make sure it will not be modified
        callback(name, Object.freeze({ ...icon_1$2.iconDefaults, ...defaults, ...icon }));
        added.push(name);
    });
    // Get aliases
    if (typeof data.aliases === 'object') {
        const aliases = data.aliases;
        Object.keys(aliases).forEach((name) => {
            const icon = resolveAlias(aliases[name], icons, aliases, 1);
            if (icon) {
                // Freeze icon to make sure it will not be modified
                callback(name, Object.freeze({ ...icon_1$2.iconDefaults, ...defaults, ...icon }));
                added.push(name);
            }
        });
    }
    return list === 'none' ? added.length > 0 : added;
}
parse.parseIconSet = parseIconSet;

var storage$2 = {};

Object.defineProperty(storage$2, "__esModule", { value: true });
storage$2.listIcons = storage$2.getIcon = storage$2.iconExists = storage$2.addIcon = storage$2.addIconSet = storage$2.getStorage = storage$2.newStorage = void 0;
const icon_1$1 = icon;
const parse_1$1 = parse;
/**
 * Storage by provider and prefix
 */
const storage$1 = Object.create(null);
/**
 * Create new storage
 */
function newStorage(provider, prefix) {
    return {
        provider,
        prefix,
        icons: Object.create(null),
        missing: Object.create(null),
    };
}
storage$2.newStorage = newStorage;
/**
 * Get storage for provider and prefix
 */
function getStorage(provider, prefix) {
    if (storage$1[provider] === void 0) {
        storage$1[provider] = Object.create(null);
    }
    const providerStorage = storage$1[provider];
    if (providerStorage[prefix] === void 0) {
        providerStorage[prefix] = newStorage(provider, prefix);
    }
    return providerStorage[prefix];
}
storage$2.getStorage = getStorage;
/**
 * Add icon set to storage
 *
 * Returns array of added icons if 'list' is true and icons were added successfully
 */
function addIconSet(storage, data, list = 'none') {
    const t = Date.now();
    return parse_1$1.parseIconSet(data, (name, icon) => {
        if (icon === null) {
            storage.missing[name] = t;
        }
        else {
            storage.icons[name] = icon;
        }
    }, list);
}
storage$2.addIconSet = addIconSet;
/**
 * Add icon to storage
 */
function addIcon$2(storage, name, icon) {
    try {
        if (typeof icon.body === 'string') {
            // Freeze icon to make sure it will not be modified
            storage.icons[name] = Object.freeze(icon_1$1.fullIcon(icon));
            return true;
        }
    }
    catch (err) {
        // Do nothing
    }
    return false;
}
storage$2.addIcon = addIcon$2;
/**
 * Check if icon exists
 */
function iconExists$1(storage, name) {
    return storage.icons[name] !== void 0;
}
storage$2.iconExists = iconExists$1;
/**
 * Get icon data
 */
function getIcon$1(storage, name) {
    const value = storage.icons[name];
    return value === void 0 ? null : value;
}
storage$2.getIcon = getIcon$1;
/**
 * List available icons
 */
function listIcons$1(provider, prefix) {
    let allIcons = [];
    // Get providers
    let providers;
    if (typeof provider === 'string') {
        providers = [provider];
    }
    else {
        providers = Object.keys(storage$1);
    }
    // Get all icons
    providers.forEach((provider) => {
        let prefixes;
        if (typeof provider === 'string' && typeof prefix === 'string') {
            prefixes = [prefix];
        }
        else {
            prefixes =
                storage$1[provider] === void 0
                    ? []
                    : Object.keys(storage$1[provider]);
        }
        prefixes.forEach((prefix) => {
            const storage = getStorage(provider, prefix);
            const icons = Object.keys(storage.icons).map((name) => (provider !== '' ? '@' + provider + ':' : '') +
                prefix +
                ':' +
                name);
            allIcons = allIcons.concat(icons);
        });
    });
    return allIcons;
}
storage$2.listIcons = listIcons$1;

Object.defineProperty(functions$3, "__esModule", { value: true });
var storageFunctions = functions$3.storageFunctions = functions$3.addCollection = functions$3.addIcon = getIconData_1 = functions$3.getIconData = allowSimpleNames_1 = functions$3.allowSimpleNames = void 0;
const parse_1 = parse;
const name_1$1 = name;
const storage_1$2 = storage$2;
/**
 * Allow storing icons without provider or prefix, making it possible to store icons like "home"
 */
let simpleNames = false;
function allowSimpleNames(allow) {
    if (typeof allow === 'boolean') {
        simpleNames = allow;
    }
    return simpleNames;
}
var allowSimpleNames_1 = functions$3.allowSimpleNames = allowSimpleNames;
/**
 * Get icon data
 */
function getIconData(name) {
    const icon = typeof name === 'string' ? name_1$1.stringToIcon(name, true, simpleNames) : name;
    return icon
        ? storage_1$2.getIcon(storage_1$2.getStorage(icon.provider, icon.prefix), icon.name)
        : null;
}
var getIconData_1 = functions$3.getIconData = getIconData;
/**
 * Add one icon
 */
function addIcon$1(name, data) {
    const icon = name_1$1.stringToIcon(name, true, simpleNames);
    if (!icon) {
        return false;
    }
    const storage = storage_1$2.getStorage(icon.provider, icon.prefix);
    return storage_1$2.addIcon(storage, icon.name, data);
}
functions$3.addIcon = addIcon$1;
/**
 * Add icon set
 */
function addCollection$1(data, provider) {
    if (typeof data !== 'object') {
        return false;
    }
    // Get provider
    if (typeof provider !== 'string') {
        provider = typeof data.provider === 'string' ? data.provider : '';
    }
    // Check for simple names: requires empty provider and prefix
    if (simpleNames &&
        provider === '' &&
        (typeof data.prefix !== 'string' || data.prefix === '')) {
        // Simple names: add icons one by one
        let added = false;
        parse_1.parseIconSet(data, (name, icon) => {
            if (icon !== null && addIcon$1(name, icon)) {
                added = true;
            }
        });
        return added;
    }
    // Validate provider and prefix
    if (typeof data.prefix !== 'string' ||
        !name_1$1.validateIcon({
            provider,
            prefix: data.prefix,
            name: 'a',
        })) {
        return false;
    }
    const storage = storage_1$2.getStorage(provider, data.prefix);
    return !!storage_1$2.addIconSet(storage, data);
}
functions$3.addCollection = addCollection$1;
/**
 * Export
 */
storageFunctions = functions$3.storageFunctions = {
    // Check if icon exists
    iconExists: (name) => getIconData(name) !== null,
    // Get raw icon data
    getIcon: (name) => {
        const result = getIconData(name);
        return result ? { ...result } : null;
    },
    // List icons
    listIcons: storage_1$2.listIcons,
    // Add icon
    addIcon: addIcon$1,
    // Add icon set
    addCollection: addCollection$1,
};

var functions$2 = {};

var id = {};

Object.defineProperty(id, "__esModule", { value: true });
var replaceIDs_1 = id.replaceIDs = void 0;
/**
 * Regular expression for finding ids
 */
const regex = /\sid="(\S+)"/g;
/**
 * Match for allowed characters before and after id in replacement, including () for group
 */
const replaceValue = '([^A-Za-z0-9_-])';
/**
 * Escape value for 'new RegExp()'
 */
function escapeRegExp(str) {
    return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); // $& means the whole matched string
}
/**
 * New random-ish prefix for ids
 */
const randomPrefix = 'IconifyId-' +
    Date.now().toString(16) +
    '-' +
    ((Math.random() * 0x1000000) | 0).toString(16) +
    '-';
/**
 * Counter for ids, increasing with every replacement
 */
let counter = 0;
/**
 * Replace IDs in SVG output with unique IDs
 * Fast replacement without parsing XML, assuming commonly used patterns and clean XML (icon should have been cleaned up with Iconify Tools or SVGO).
 */
function replaceIDs$1(body, prefix = randomPrefix) {
    // Find all IDs
    const ids = [];
    let match;
    while ((match = regex.exec(body))) {
        ids.push(match[1]);
    }
    if (!ids.length) {
        return body;
    }
    // Replace with unique ids
    ids.forEach((id) => {
        const newID = typeof prefix === 'function' ? prefix() : prefix + counter++;
        body = body.replace(new RegExp(replaceValue + '(' + escapeRegExp(id) + ')' + replaceValue, 'g'), '$1' + newID + '$3');
    });
    return body;
}
replaceIDs_1 = id.replaceIDs = replaceIDs$1;

var size = {};

Object.defineProperty(size, "__esModule", { value: true });
size.calculateSize = void 0;
/**
 * Regular expressions for calculating dimensions
 */
const unitsSplit = /(-?[0-9.]*[0-9]+[0-9.]*)/g;
const unitsTest = /^-?[0-9.]*[0-9]+[0-9.]*$/g;
/**
 * Calculate second dimension when only 1 dimension is set
 *
 * @param {string|number} size One dimension (such as width)
 * @param {number} ratio Width/height ratio.
 *      If size is width, ratio = height/width
 *      If size is height, ratio = width/height
 * @param {number} [precision] Floating number precision in result to minimize output. Default = 2
 * @return {string|number} Another dimension
 */
function calculateSize$1(size, ratio, precision) {
    if (ratio === 1) {
        return size;
    }
    precision = precision === void 0 ? 100 : precision;
    if (typeof size === 'number') {
        return Math.ceil(size * ratio * precision) / precision;
    }
    if (typeof size !== 'string') {
        return size;
    }
    // Split code into sets of strings and numbers
    const oldParts = size.split(unitsSplit);
    if (oldParts === null || !oldParts.length) {
        return size;
    }
    const newParts = [];
    let code = oldParts.shift();
    let isNumber = unitsTest.test(code);
    // eslint-disable-next-line no-constant-condition
    while (true) {
        if (isNumber) {
            const num = parseFloat(code);
            if (isNaN(num)) {
                newParts.push(code);
            }
            else {
                newParts.push(Math.ceil(num * ratio * precision) / precision);
            }
        }
        else {
            newParts.push(code);
        }
        // next
        code = oldParts.shift();
        if (code === void 0) {
            return newParts.join('');
        }
        isNumber = !isNumber;
    }
}
size.calculateSize = calculateSize$1;

var customisations = {};

Object.defineProperty(customisations, "__esModule", { value: true });
var mergeCustomisations_1 = customisations.mergeCustomisations = defaults = customisations.defaults = void 0;
/**
 * Default icon customisations values
 */
var defaults = customisations.defaults = Object.freeze({
    // Display mode
    inline: false,
    // Dimensions
    width: null,
    height: null,
    // Alignment
    hAlign: 'center',
    vAlign: 'middle',
    slice: false,
    // Transformations
    hFlip: false,
    vFlip: false,
    rotate: 0,
});
/**
 * Convert IconifyIconCustomisations to FullIconCustomisations
 */
function mergeCustomisations(defaults, item) {
    const result = {};
    for (const key in defaults) {
        const attr = key;
        // Copy old value
        result[attr] = defaults[attr];
        if (item[attr] === void 0) {
            continue;
        }
        // Validate new value
        const value = item[attr];
        switch (attr) {
            // Boolean attributes that override old value
            case 'inline':
            case 'slice':
                if (typeof value === 'boolean') {
                    result[attr] = value;
                }
                break;
            // Boolean attributes that are merged
            case 'hFlip':
            case 'vFlip':
                if (value === true) {
                    result[attr] = !result[attr];
                }
                break;
            // Non-empty string
            case 'hAlign':
            case 'vAlign':
                if (typeof value === 'string' && value !== '') {
                    result[attr] = value;
                }
                break;
            // Non-empty string / non-zero number / null
            case 'width':
            case 'height':
                if ((typeof value === 'string' && value !== '') ||
                    (typeof value === 'number' && value) ||
                    value === null) {
                    result[attr] = value;
                }
                break;
            // Rotation
            case 'rotate':
                if (typeof value === 'number') {
                    result[attr] += value;
                }
                break;
        }
    }
    return result;
}
mergeCustomisations_1 = customisations.mergeCustomisations = mergeCustomisations;

var build = {};

Object.defineProperty(build, "__esModule", { value: true });
var iconToSVG_1 = build.iconToSVG = void 0;
const size_1$1 = size;
/**
 * Get preserveAspectRatio value
 */
function preserveAspectRatio(props) {
    let result = '';
    switch (props.hAlign) {
        case 'left':
            result += 'xMin';
            break;
        case 'right':
            result += 'xMax';
            break;
        default:
            result += 'xMid';
    }
    switch (props.vAlign) {
        case 'top':
            result += 'YMin';
            break;
        case 'bottom':
            result += 'YMax';
            break;
        default:
            result += 'YMid';
    }
    result += props.slice ? ' slice' : ' meet';
    return result;
}
/**
 * Get SVG attributes and content from icon + customisations
 *
 * Does not generate style to make it compatible with frameworks that use objects for style, such as React.
 * Instead, it generates 'inline' value. If true, rendering engine should add verticalAlign: -0.125em to icon.
 *
 * Customisations should be normalised by platform specific parser.
 * Result should be converted to <svg> by platform specific parser.
 * Use replaceIDs to generate unique IDs for body.
 */
function iconToSVG(icon, customisations) {
    // viewBox
    const box = {
        left: icon.left,
        top: icon.top,
        width: icon.width,
        height: icon.height,
    };
    // Body
    let body = icon.body;
    // Apply transformations
    [icon, customisations].forEach((props) => {
        const transformations = [];
        const hFlip = props.hFlip;
        const vFlip = props.vFlip;
        let rotation = props.rotate;
        // Icon is flipped first, then rotated
        if (hFlip) {
            if (vFlip) {
                rotation += 2;
            }
            else {
                // Horizontal flip
                transformations.push('translate(' +
                    (box.width + box.left) +
                    ' ' +
                    (0 - box.top) +
                    ')');
                transformations.push('scale(-1 1)');
                box.top = box.left = 0;
            }
        }
        else if (vFlip) {
            // Vertical flip
            transformations.push('translate(' +
                (0 - box.left) +
                ' ' +
                (box.height + box.top) +
                ')');
            transformations.push('scale(1 -1)');
            box.top = box.left = 0;
        }
        let tempValue;
        if (rotation < 0) {
            rotation -= Math.floor(rotation / 4) * 4;
        }
        rotation = rotation % 4;
        switch (rotation) {
            case 1:
                // 90deg
                tempValue = box.height / 2 + box.top;
                transformations.unshift('rotate(90 ' + tempValue + ' ' + tempValue + ')');
                break;
            case 2:
                // 180deg
                transformations.unshift('rotate(180 ' +
                    (box.width / 2 + box.left) +
                    ' ' +
                    (box.height / 2 + box.top) +
                    ')');
                break;
            case 3:
                // 270deg
                tempValue = box.width / 2 + box.left;
                transformations.unshift('rotate(-90 ' + tempValue + ' ' + tempValue + ')');
                break;
        }
        if (rotation % 2 === 1) {
            // Swap width/height and x/y for 90deg or 270deg rotation
            if (box.left !== 0 || box.top !== 0) {
                tempValue = box.left;
                box.left = box.top;
                box.top = tempValue;
            }
            if (box.width !== box.height) {
                tempValue = box.width;
                box.width = box.height;
                box.height = tempValue;
            }
        }
        if (transformations.length) {
            body =
                '<g transform="' +
                    transformations.join(' ') +
                    '">' +
                    body +
                    '</g>';
        }
    });
    // Calculate dimensions
    let width, height;
    if (customisations.width === null && customisations.height === null) {
        // Set height to '1em', calculate width
        height = '1em';
        width = size_1$1.calculateSize(height, box.width / box.height);
    }
    else if (customisations.width !== null &&
        customisations.height !== null) {
        // Values are set
        width = customisations.width;
        height = customisations.height;
    }
    else if (customisations.height !== null) {
        // Height is set
        height = customisations.height;
        width = size_1$1.calculateSize(height, box.width / box.height);
    }
    else {
        // Width is set
        width = customisations.width;
        height = size_1$1.calculateSize(width, box.height / box.width);
    }
    // Check for 'auto'
    if (width === 'auto') {
        width = box.width;
    }
    if (height === 'auto') {
        height = box.height;
    }
    // Convert to string
    width = typeof width === 'string' ? width : width + '';
    height = typeof height === 'string' ? height : height + '';
    // Result
    const result = {
        attributes: {
            width,
            height,
            preserveAspectRatio: preserveAspectRatio(customisations),
            viewBox: box.left + ' ' + box.top + ' ' + box.width + ' ' + box.height,
        },
        body,
    };
    if (customisations.inline) {
        result.inline = true;
    }
    return result;
}
iconToSVG_1 = build.iconToSVG = iconToSVG;

Object.defineProperty(functions$2, "__esModule", { value: true });
var builderFunctions = functions$2.builderFunctions = void 0;
const icon_1 = icon;
const id_1 = id;
const size_1 = size;
const customisations_1 = customisations;
const build_1 = build;
/**
 * Exported builder functions
 */
builderFunctions = functions$2.builderFunctions = {
    replaceIDs: id_1.replaceIDs,
    calculateSize: size_1.calculateSize,
    buildIcon: (icon, customisations) => {
        return build_1.iconToSVG(icon_1.fullIcon(icon), customisations_1.mergeCustomisations(customisations_1.defaults, customisations));
    },
};

var modules$1 = {};

Object.defineProperty(modules$1, "__esModule", { value: true });
var coreModules = modules$1.coreModules = void 0;
coreModules = modules$1.coreModules = {};

var api = {};

var redundancy = {};

var config$1 = {};

Object.defineProperty(config$1, "__esModule", { value: true });
config$1.defaultConfig = void 0;
/**
 * Default RedundancyConfig for API calls
 */
config$1.defaultConfig = {
    resources: [],
    index: 0,
    timeout: 2000,
    rotate: 750,
    random: false,
    dataAfterTimeout: false,
};

var query = {};

Object.defineProperty(query, "__esModule", { value: true });
query.sendQuery = void 0;
/**
 * Send query
 */
function sendQuery(config, payload, query, done, success) {
    // Get number of resources
    const resourcesCount = config.resources.length;
    // Save start index
    const startIndex = config.random
        ? Math.floor(Math.random() * resourcesCount)
        : config.index;
    // Get resources
    let resources;
    if (config.random) {
        // Randomise array
        let list = config.resources.slice(0);
        resources = [];
        while (list.length > 1) {
            const nextIndex = Math.floor(Math.random() * list.length);
            resources.push(list[nextIndex]);
            list = list.slice(0, nextIndex).concat(list.slice(nextIndex + 1));
        }
        resources = resources.concat(list);
    }
    else {
        // Rearrange resources to start with startIndex
        resources = config.resources
            .slice(startIndex)
            .concat(config.resources.slice(0, startIndex));
    }
    // Counters, status
    const startTime = Date.now();
    let status = 'pending';
    let queriesSent = 0;
    let lastError = void 0;
    // Timer
    let timer = null;
    // Execution queue
    let queue = [];
    // Callbacks to call when query is complete
    let doneCallbacks = [];
    if (typeof done === 'function') {
        doneCallbacks.push(done);
    }
    /**
     * Reset timer
     */
    function resetTimer() {
        if (timer) {
            clearTimeout(timer);
            timer = null;
        }
    }
    /**
     * Abort everything
     */
    function abort() {
        // Change status
        if (status === 'pending') {
            status = 'aborted';
        }
        // Reset timer
        resetTimer();
        // Abort all queued items
        queue.forEach((item) => {
            if (item.abort) {
                item.abort();
            }
            if (item.status === 'pending') {
                item.status = 'aborted';
            }
        });
        queue = [];
    }
    /**
     * Add / replace callback to call when execution is complete.
     * This can be used to abort pending query implementations when query is complete or aborted.
     */
    function subscribe(callback, overwrite) {
        if (overwrite) {
            doneCallbacks = [];
        }
        if (typeof callback === 'function') {
            doneCallbacks.push(callback);
        }
    }
    /**
     * Get query status
     */
    function getQueryStatus() {
        return {
            startTime,
            payload,
            status,
            queriesSent,
            queriesPending: queue.length,
            subscribe,
            abort,
        };
    }
    /**
     * Fail query
     */
    function failQuery() {
        status = 'failed';
        // Send notice to all callbacks
        doneCallbacks.forEach((callback) => {
            callback(void 0, lastError);
        });
    }
    /**
     * Clear queue
     */
    function clearQueue() {
        queue = queue.filter((item) => {
            if (item.status === 'pending') {
                item.status = 'aborted';
            }
            if (item.abort) {
                item.abort();
            }
            return false;
        });
    }
    /**
     * Got response from module
     */
    function moduleResponse(item, data, error) {
        const isError = data === void 0;
        // Remove item from queue
        queue = queue.filter((queued) => queued !== item);
        // Check status
        switch (status) {
            case 'pending':
                // Pending
                break;
            case 'failed':
                if (isError || !config.dataAfterTimeout) {
                    // Query has already timed out or dataAfterTimeout is disabled
                    return;
                }
                // Success after failure
                break;
            default:
                // Aborted or completed
                return;
        }
        // Error
        if (isError) {
            if (error !== void 0) {
                lastError = error;
            }
            if (!queue.length) {
                if (!resources.length) {
                    // Nothing else queued, nothing can be queued
                    failQuery();
                }
                else {
                    // Queue is empty: run next item immediately
                    // eslint-disable-next-line @typescript-eslint/no-use-before-define
                    execNext();
                }
            }
            return;
        }
        // Reset timers, abort pending queries
        resetTimer();
        clearQueue();
        // Update index in Redundancy
        if (success && !config.random) {
            const index = config.resources.indexOf(item.resource);
            if (index !== -1 && index !== config.index) {
                success(index);
            }
        }
        // Mark as completed and call callbacks
        status = 'completed';
        doneCallbacks.forEach((callback) => {
            callback(data);
        });
    }
    /**
     * Execute next query
     */
    function execNext() {
        // Check status
        if (status !== 'pending') {
            return;
        }
        // Reset timer
        resetTimer();
        // Get resource
        const resource = resources.shift();
        if (resource === void 0) {
            // Nothing to execute: wait for final timeout before failing
            if (queue.length) {
                const timeout = typeof config.timeout === 'function'
                    ? config.timeout(startTime)
                    : config.timeout;
                if (timeout) {
                    // Last timeout before failing to allow late response
                    timer = setTimeout(() => {
                        resetTimer();
                        if (status === 'pending') {
                            // Clear queue
                            clearQueue();
                            failQuery();
                        }
                    }, timeout);
                    return;
                }
            }
            // Fail
            failQuery();
            return;
        }
        // Create new item
        const item = {
            getQueryStatus,
            status: 'pending',
            resource,
            done: (data, error) => {
                moduleResponse(item, data, error);
            },
        };
        // Add to queue
        queue.push(item);
        // Bump next index
        queriesSent++;
        // Get timeout for next item
        const timeout = typeof config.rotate === 'function'
            ? config.rotate(queriesSent, startTime)
            : config.rotate;
        // Create timer
        timer = setTimeout(execNext, timeout);
        // Execute it
        query(resource, payload, item);
    }
    // Execute first query on next tick
    setTimeout(execNext);
    // Return getQueryStatus()
    return getQueryStatus;
}
query.sendQuery = sendQuery;

Object.defineProperty(redundancy, "__esModule", { value: true });
redundancy.initRedundancy = void 0;
const config_1$2 = config$1;
const query_1 = query;
/**
 * Set configuration
 */
function setConfig(config) {
    if (typeof config !== 'object' ||
        typeof config.resources !== 'object' ||
        !(config.resources instanceof Array) ||
        !config.resources.length) {
        throw new Error('Invalid Reduncancy configuration');
    }
    const newConfig = Object.create(null);
    let key;
    for (key in config_1$2.defaultConfig) {
        if (config[key] !== void 0) {
            newConfig[key] = config[key];
        }
        else {
            newConfig[key] = config_1$2.defaultConfig[key];
        }
    }
    return newConfig;
}
/**
 * Redundancy instance
 */
function initRedundancy(cfg) {
    // Configuration
    const config = setConfig(cfg);
    // List of queries
    let queries = [];
    /**
     * Remove aborted and completed queries
     */
    function cleanup() {
        queries = queries.filter((item) => item().status === 'pending');
    }
    /**
     * Send query
     */
    function query(payload, queryCallback, doneCallback) {
        const query = query_1.sendQuery(config, payload, queryCallback, (data, error) => {
            // Remove query from list
            cleanup();
            // Call callback
            if (doneCallback) {
                doneCallback(data, error);
            }
        }, (newIndex) => {
            // Update start index
            config.index = newIndex;
        });
        queries.push(query);
        return query;
    }
    /**
     * Find instance
     */
    function find(callback) {
        const result = queries.find((value) => {
            return callback(value);
        });
        return result !== void 0 ? result : null;
    }
    // Create and return functions
    const instance = {
        query,
        find,
        setIndex: (index) => {
            config.index = index;
        },
        getIndex: () => config.index,
        cleanup,
    };
    return instance;
}
redundancy.initRedundancy = initRedundancy;

var sort = {};

Object.defineProperty(sort, "__esModule", { value: true });
sort.sortIcons = void 0;
const storage_1$1 = storage$2;
/**
 * Check if icons have been loaded
 */
function sortIcons(icons) {
    const result = {
        loaded: [],
        missing: [],
        pending: [],
    };
    const storage = Object.create(null);
    // Sort icons alphabetically to prevent duplicates and make sure they are sorted in API queries
    icons.sort((a, b) => {
        if (a.provider !== b.provider) {
            return a.provider.localeCompare(b.provider);
        }
        if (a.prefix !== b.prefix) {
            return a.prefix.localeCompare(b.prefix);
        }
        return a.name.localeCompare(b.name);
    });
    let lastIcon = {
        provider: '',
        prefix: '',
        name: '',
    };
    icons.forEach((icon) => {
        if (lastIcon.name === icon.name &&
            lastIcon.prefix === icon.prefix &&
            lastIcon.provider === icon.provider) {
            return;
        }
        lastIcon = icon;
        // Check icon
        const provider = icon.provider;
        const prefix = icon.prefix;
        const name = icon.name;
        if (storage[provider] === void 0) {
            storage[provider] = Object.create(null);
        }
        const providerStorage = storage[provider];
        if (providerStorage[prefix] === void 0) {
            providerStorage[prefix] = storage_1$1.getStorage(provider, prefix);
        }
        const localStorage = providerStorage[prefix];
        let list;
        if (localStorage.icons[name] !== void 0) {
            list = result.loaded;
        }
        else if (prefix === '' || localStorage.missing[name] !== void 0) {
            // Mark icons without prefix as missing because they cannot be loaded from API
            list = result.missing;
        }
        else {
            list = result.pending;
        }
        const item = {
            provider,
            prefix,
            name,
        };
        list.push(item);
    });
    return result;
}
sort.sortIcons = sortIcons;

var callbacks = {};

(function (exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.storeCallback = exports.updateCallbacks = exports.callbacks = void 0;
const storage_1 = storage$2;
// Records sorted by provider and prefix
// This export is only for unit testing, should not be used
exports.callbacks = Object.create(null);
const pendingUpdates = Object.create(null);
/**
 * Remove callback
 */
function removeCallback(sources, id) {
    sources.forEach((source) => {
        const provider = source.provider;
        if (exports.callbacks[provider] === void 0) {
            return;
        }
        const providerCallbacks = exports.callbacks[provider];
        const prefix = source.prefix;
        const items = providerCallbacks[prefix];
        if (items) {
            providerCallbacks[prefix] = items.filter((row) => row.id !== id);
        }
    });
}
/**
 * Update all callbacks for provider and prefix
 */
function updateCallbacks(provider, prefix) {
    if (pendingUpdates[provider] === void 0) {
        pendingUpdates[provider] = Object.create(null);
    }
    const providerPendingUpdates = pendingUpdates[provider];
    if (!providerPendingUpdates[prefix]) {
        providerPendingUpdates[prefix] = true;
        setTimeout(() => {
            providerPendingUpdates[prefix] = false;
            if (exports.callbacks[provider] === void 0 ||
                exports.callbacks[provider][prefix] === void 0) {
                return;
            }
            // Get all items
            const items = exports.callbacks[provider][prefix].slice(0);
            if (!items.length) {
                return;
            }
            const storage = storage_1.getStorage(provider, prefix);
            // Check each item for changes
            let hasPending = false;
            items.forEach((item) => {
                const icons = item.icons;
                const oldLength = icons.pending.length;
                icons.pending = icons.pending.filter((icon) => {
                    if (icon.prefix !== prefix) {
                        // Checking only current prefix
                        return true;
                    }
                    const name = icon.name;
                    if (storage.icons[name] !== void 0) {
                        // Loaded
                        icons.loaded.push({
                            provider,
                            prefix,
                            name,
                        });
                    }
                    else if (storage.missing[name] !== void 0) {
                        // Missing
                        icons.missing.push({
                            provider,
                            prefix,
                            name,
                        });
                    }
                    else {
                        // Pending
                        hasPending = true;
                        return true;
                    }
                    return false;
                });
                // Changes detected - call callback
                if (icons.pending.length !== oldLength) {
                    if (!hasPending) {
                        // All icons have been loaded - remove callback from prefix
                        removeCallback([
                            {
                                provider,
                                prefix,
                            },
                        ], item.id);
                    }
                    item.callback(icons.loaded.slice(0), icons.missing.slice(0), icons.pending.slice(0), item.abort);
                }
            });
        });
    }
}
exports.updateCallbacks = updateCallbacks;
/**
 * Unique id counter for callbacks
 */
let idCounter = 0;
/**
 * Add callback
 */
function storeCallback(callback, icons, pendingSources) {
    // Create unique id and abort function
    const id = idCounter++;
    const abort = removeCallback.bind(null, pendingSources, id);
    if (!icons.pending.length) {
        // Do not store item without pending icons and return function that does nothing
        return abort;
    }
    // Create item and store it for all pending prefixes
    const item = {
        id,
        icons,
        callback,
        abort: abort,
    };
    pendingSources.forEach((source) => {
        const provider = source.provider;
        const prefix = source.prefix;
        if (exports.callbacks[provider] === void 0) {
            exports.callbacks[provider] = Object.create(null);
        }
        const providerCallbacks = exports.callbacks[provider];
        if (providerCallbacks[prefix] === void 0) {
            providerCallbacks[prefix] = [];
        }
        providerCallbacks[prefix].push(item);
    });
    return abort;
}
exports.storeCallback = storeCallback;
}(callbacks));

var modules = {};

Object.defineProperty(modules, "__esModule", { value: true });
modules.getAPIModule = setAPIModule_1 = modules.setAPIModule = void 0;
/**
 * Local storate types and entries
 */
const storage = Object.create(null);
/**
 * Set API module
 */
function setAPIModule(provider, item) {
    storage[provider] = item;
}
var setAPIModule_1 = modules.setAPIModule = setAPIModule;
/**
 * Get API module
 */
function getAPIModule$3(provider) {
    return storage[provider] === void 0 ? storage[''] : storage[provider];
}
modules.getAPIModule = getAPIModule$3;

var config = {};

Object.defineProperty(config, "__esModule", { value: true });
var getAPIConfig_1 = config.getAPIConfig = setAPIConfig_1 = config.setAPIConfig = void 0;
/**
 * Create full API configuration from partial data
 */
function createConfig(source) {
    let resources;
    if (typeof source.resources === 'string') {
        resources = [source.resources];
    }
    else {
        resources = source.resources;
        if (!(resources instanceof Array) || !resources.length) {
            return null;
        }
    }
    const result = {
        // API hosts
        resources: resources,
        // Root path
        path: source.path === void 0 ? '/' : source.path,
        // URL length limit
        maxURL: source.maxURL ? source.maxURL : 500,
        // Timeout before next host is used.
        rotate: source.rotate ? source.rotate : 750,
        // Timeout before failing query.
        timeout: source.timeout ? source.timeout : 5000,
        // Randomise default API end point.
        random: source.random === true,
        // Start index
        index: source.index ? source.index : 0,
        // Receive data after time out (used if time out kicks in first, then API module sends data anyway).
        dataAfterTimeout: source.dataAfterTimeout !== false,
    };
    return result;
}
/**
 * Local storage
 */
const configStorage = Object.create(null);
/**
 * Redundancy for API servers.
 *
 * API should have very high uptime because of implemented redundancy at server level, but
 * sometimes bad things happen. On internet 100% uptime is not possible.
 *
 * There could be routing problems. Server might go down for whatever reason, but it takes
 * few minutes to detect that downtime, so during those few minutes API might not be accessible.
 *
 * This script has some redundancy to mitigate possible network issues.
 *
 * If one host cannot be reached in 'rotate' (750 by default) ms, script will try to retrieve
 * data from different host. Hosts have different configurations, pointing to different
 * API servers hosted at different providers.
 */
const fallBackAPISources = [
    'https://api.simplesvg.com',
    'https://api.unisvg.com',
];
// Shuffle fallback API
const fallBackAPI = [];
while (fallBackAPISources.length > 0) {
    if (fallBackAPISources.length === 1) {
        fallBackAPI.push(fallBackAPISources.shift());
    }
    else {
        // Get first or last item
        if (Math.random() > 0.5) {
            fallBackAPI.push(fallBackAPISources.shift());
        }
        else {
            fallBackAPI.push(fallBackAPISources.pop());
        }
    }
}
// Add default API
configStorage[''] = createConfig({
    resources: ['https://api.iconify.design'].concat(fallBackAPI),
});
/**
 * Add custom config for provider
 */
function setAPIConfig(provider, customConfig) {
    const config = createConfig(customConfig);
    if (config === null) {
        return false;
    }
    configStorage[provider] = config;
    return true;
}
var setAPIConfig_1 = config.setAPIConfig = setAPIConfig;
/**
 * Get API configuration
 */
const getAPIConfig = (provider) => configStorage[provider];
getAPIConfig_1 = config.getAPIConfig = getAPIConfig;

var list = {};

Object.defineProperty(list, "__esModule", { value: true });
list.getProviders = list.listToIcons = void 0;
const name_1 = name;
/**
 * Convert icons list from string/icon mix to icons and validate them
 */
function listToIcons(list, validate = true, simpleNames = false) {
    const result = [];
    list.forEach((item) => {
        const icon = typeof item === 'string'
            ? name_1.stringToIcon(item, false, simpleNames)
            : item;
        if (!validate || name_1.validateIcon(icon, simpleNames)) {
            result.push({
                provider: icon.provider,
                prefix: icon.prefix,
                name: icon.name,
            });
        }
    });
    return result;
}
list.listToIcons = listToIcons;
/**
 * Get all providers
 */
function getProviders(list) {
    const providers = Object.create(null);
    list.forEach((icon) => {
        providers[icon.provider] = true;
    });
    return Object.keys(providers);
}
list.getProviders = getProviders;

Object.defineProperty(api, "__esModule", { value: true });
var API = api.API = api.getRedundancyCache = void 0;
const redundancy_1 = redundancy;
const sort_1 = sort;
const callbacks_1 = callbacks;
const modules_1$1 = modules;
const config_1$1 = config;
const storage_1 = storage$2;
const modules_2 = modules$1;
const list_1 = list;
const functions_1 = functions$3;
// Empty abort callback for loadIcons()
function emptyCallback() {
    // Do nothing
}
const pendingIcons = Object.create(null);
/**
 * List of icons that are waiting to be loaded.
 *
 * List is passed to API module, then cleared.
 *
 * This list should not be used for any checks, use pendingIcons to check
 * if icons is being loaded.
 *
 * [provider][prefix] = array of icon names
 */
const iconsToLoad = Object.create(null);
// Flags to merge multiple synchronous icon requests in one asynchronous request
const loaderFlags = Object.create(null);
const queueFlags = Object.create(null);
const redundancyCache = Object.create(null);
/**
 * Get Redundancy instance for provider
 */
function getRedundancyCache(provider) {
    if (redundancyCache[provider] === void 0) {
        const config = config_1$1.getAPIConfig(provider);
        if (!config) {
            // No way to load icons because configuration is not set!
            return;
        }
        const redundancy = redundancy_1.initRedundancy(config);
        const cachedReundancy = {
            config,
            redundancy,
        };
        redundancyCache[provider] = cachedReundancy;
    }
    return redundancyCache[provider];
}
api.getRedundancyCache = getRedundancyCache;
/**
 * Function called when new icons have been loaded
 */
function loadedNewIcons(provider, prefix) {
    // Run only once per tick, possibly joining multiple API responses in one call
    if (loaderFlags[provider] === void 0) {
        loaderFlags[provider] = Object.create(null);
    }
    const providerLoaderFlags = loaderFlags[provider];
    if (!providerLoaderFlags[prefix]) {
        providerLoaderFlags[prefix] = true;
        setTimeout(() => {
            providerLoaderFlags[prefix] = false;
            callbacks_1.updateCallbacks(provider, prefix);
        });
    }
}
// Storage for errors for loadNewIcons(). Used to avoid spamming log with identical errors.
const errorsCache = Object.create(null);
/**
 * Load icons
 */
function loadNewIcons(provider, prefix, icons) {
    function err() {
        const key = (provider === '' ? '' : '@' + provider + ':') + prefix;
        const time = Math.floor(Date.now() / 60000); // log once in a minute
        if (errorsCache[key] < time) {
            errorsCache[key] = time;
            console.error('Unable to retrieve icons for "' +
                key +
                '" because API is not configured properly.');
        }
    }
    // Create nested objects if needed
    if (iconsToLoad[provider] === void 0) {
        iconsToLoad[provider] = Object.create(null);
    }
    const providerIconsToLoad = iconsToLoad[provider];
    if (queueFlags[provider] === void 0) {
        queueFlags[provider] = Object.create(null);
    }
    const providerQueueFlags = queueFlags[provider];
    if (pendingIcons[provider] === void 0) {
        pendingIcons[provider] = Object.create(null);
    }
    const providerPendingIcons = pendingIcons[provider];
    // Add icons to queue
    if (providerIconsToLoad[prefix] === void 0) {
        providerIconsToLoad[prefix] = icons;
    }
    else {
        providerIconsToLoad[prefix] = providerIconsToLoad[prefix]
            .concat(icons)
            .sort();
    }
    // Redundancy item
    let cachedReundancy;
    // Trigger update on next tick, mering multiple synchronous requests into one asynchronous request
    if (!providerQueueFlags[prefix]) {
        providerQueueFlags[prefix] = true;
        setTimeout(() => {
            providerQueueFlags[prefix] = false;
            // Get icons and delete queue
            const icons = providerIconsToLoad[prefix];
            delete providerIconsToLoad[prefix];
            // Get API module
            const api = modules_1$1.getAPIModule(provider);
            if (!api) {
                // No way to load icons!
                err();
                return;
            }
            // Get API config and Redundancy instance
            if (cachedReundancy === void 0) {
                const redundancy = getRedundancyCache(provider);
                if (redundancy === void 0) {
                    // No way to load icons because configuration is not set!
                    err();
                    return;
                }
                cachedReundancy = redundancy;
            }
            // Prepare parameters and run queries
            const params = api.prepare(provider, prefix, icons);
            params.forEach((item) => {
                cachedReundancy.redundancy.query(item, api.send, (data, error) => {
                    const storage = storage_1.getStorage(provider, prefix);
                    // Check for error
                    if (typeof data !== 'object') {
                        if (error !== 404) {
                            // Do not handle error unless it is 404
                            return;
                        }
                        // Not found: mark as missing
                        const t = Date.now();
                        item.icons.forEach((name) => {
                            storage.missing[name] = t;
                        });
                    }
                    else {
                        // Add icons to storage
                        try {
                            const added = storage_1.addIconSet(storage, data, 'all');
                            if (typeof added === 'boolean') {
                                return;
                            }
                            // Remove added icons from pending list
                            const pending = providerPendingIcons[prefix];
                            added.forEach((name) => {
                                delete pending[name];
                            });
                            // Cache API response
                            if (modules_2.coreModules.cache) {
                                modules_2.coreModules.cache(provider, data);
                            }
                        }
                        catch (err) {
                            console.error(err);
                        }
                    }
                    // Trigger update on next tick
                    loadedNewIcons(provider, prefix);
                });
            });
        });
    }
}
/**
 * Check if icon is being loaded
 */
const isPending = (icon) => {
    return (pendingIcons[icon.provider] !== void 0 &&
        pendingIcons[icon.provider][icon.prefix] !== void 0 &&
        pendingIcons[icon.provider][icon.prefix][icon.name] !== void 0);
};
/**
 * Load icons
 */
const loadIcons$1 = (icons, callback) => {
    // Clean up and copy icons list
    const cleanedIcons = list_1.listToIcons(icons, true, functions_1.allowSimpleNames());
    // Sort icons by missing/loaded/pending
    // Pending means icon is either being requsted or is about to be requested
    const sortedIcons = sort_1.sortIcons(cleanedIcons);
    if (!sortedIcons.pending.length) {
        // Nothing to load
        let callCallback = true;
        if (callback) {
            setTimeout(() => {
                if (callCallback) {
                    callback(sortedIcons.loaded, sortedIcons.missing, sortedIcons.pending, emptyCallback);
                }
            });
        }
        return () => {
            callCallback = false;
        };
    }
    // Get all sources for pending icons
    const newIcons = Object.create(null);
    const sources = [];
    let lastProvider, lastPrefix;
    sortedIcons.pending.forEach((icon) => {
        const provider = icon.provider;
        const prefix = icon.prefix;
        if (prefix === lastPrefix && provider === lastProvider) {
            return;
        }
        lastProvider = provider;
        lastPrefix = prefix;
        sources.push({
            provider,
            prefix,
        });
        if (pendingIcons[provider] === void 0) {
            pendingIcons[provider] = Object.create(null);
        }
        const providerPendingIcons = pendingIcons[provider];
        if (providerPendingIcons[prefix] === void 0) {
            providerPendingIcons[prefix] = Object.create(null);
        }
        if (newIcons[provider] === void 0) {
            newIcons[provider] = Object.create(null);
        }
        const providerNewIcons = newIcons[provider];
        if (providerNewIcons[prefix] === void 0) {
            providerNewIcons[prefix] = [];
        }
    });
    // List of new icons
    const time = Date.now();
    // Filter pending icons list: find icons that are not being loaded yet
    // If icon was called before, it must exist in pendingIcons or storage, but because this
    // function is called right after sortIcons() that checks storage, icon is definitely not in storage.
    sortedIcons.pending.forEach((icon) => {
        const provider = icon.provider;
        const prefix = icon.prefix;
        const name = icon.name;
        const pendingQueue = pendingIcons[provider][prefix];
        if (pendingQueue[name] === void 0) {
            // New icon - add to pending queue to mark it as being loaded
            pendingQueue[name] = time;
            // Add it to new icons list to pass it to API module for loading
            newIcons[provider][prefix].push(name);
        }
    });
    // Load icons on next tick to make sure result is not returned before callback is stored and
    // to consolidate multiple synchronous loadIcons() calls into one asynchronous API call
    sources.forEach((source) => {
        const provider = source.provider;
        const prefix = source.prefix;
        if (newIcons[provider][prefix].length) {
            loadNewIcons(provider, prefix, newIcons[provider][prefix]);
        }
    });
    // Store callback and return abort function
    return callback
        ? callbacks_1.storeCallback(callback, sortedIcons, sources)
        : emptyCallback;
};
/**
 * Export module
 */
API = api.API = {
    isPending,
    loadIcons: loadIcons$1,
};

var functions$1 = {};

Object.defineProperty(functions$1, "__esModule", { value: true });
var APIInternalFunctions = functions$1.APIInternalFunctions = APIFunctions = functions$1.APIFunctions = void 0;
const _1 = api;
const config_1 = config;
const modules_1 = modules;
var APIFunctions = functions$1.APIFunctions = {
    loadIcons: _1.API.loadIcons,
    addAPIProvider: config_1.setAPIConfig,
};
APIInternalFunctions = functions$1.APIInternalFunctions = {
    getAPI: _1.getRedundancyCache,
    getAPIConfig: config_1.getAPIConfig,
    setAPIModule: modules_1.setAPIModule,
};

var jsonp = {};

Object.defineProperty(jsonp, "__esModule", { value: true });
var getAPIModule_1$1 = jsonp.getAPIModule = void 0;
let rootVar = null;
/**
 * Endpoint
 */
let endPoint$1 = '{prefix}.js?icons={icons}&callback={callback}';
/**
 * Cache: provider:prefix = value
 */
const maxLengthCache$1 = Object.create(null);
const pathCache$1 = Object.create(null);
/**
 * Get hash for query
 *
 * Hash is used in JSONP callback name, so same queries end up with same JSONP callback,
 * allowing response to be cached in browser.
 */
function hash(str) {
    let total = 0, i;
    for (i = str.length - 1; i >= 0; i--) {
        total += str.charCodeAt(i);
    }
    return total % 999;
}
/**
 * Get root object
 */
function getGlobal() {
    // Create root
    if (rootVar === null) {
        // window
        const globalRoot = self;
        // Test for window.Iconify. If missing, create 'IconifyJSONP'
        let prefix = 'Iconify';
        let extraPrefix = '.cb';
        if (globalRoot[prefix] === void 0) {
            // Use 'IconifyJSONP' global
            prefix = 'IconifyJSONP';
            extraPrefix = '';
            if (globalRoot[prefix] === void 0) {
                globalRoot[prefix] = Object.create(null);
            }
            rootVar = globalRoot[prefix];
        }
        else {
            // Use 'Iconify.cb'
            const iconifyRoot = globalRoot[prefix];
            if (iconifyRoot.cb === void 0) {
                iconifyRoot.cb = Object.create(null);
            }
            rootVar = iconifyRoot.cb;
        }
        // Change end point
        endPoint$1 = endPoint$1.replace('{callback}', prefix + extraPrefix + '.{cb}');
    }
    return rootVar;
}
/**
 * Return API module
 */
const getAPIModule$2 = (getAPIConfig) => {
    /**
     * Calculate maximum icons list length for prefix
     */
    function calculateMaxLength(provider, prefix) {
        // Get config and store path
        const config = getAPIConfig(provider);
        if (!config) {
            return 0;
        }
        // Calculate
        let result;
        if (!config.maxURL) {
            result = 0;
        }
        else {
            let maxHostLength = 0;
            config.resources.forEach((item) => {
                const host = item;
                maxHostLength = Math.max(maxHostLength, host.length);
            });
            // Make sure global is set
            getGlobal();
            // Extra width: prefix (3) + counter (4) - '{cb}' (4)
            const extraLength = 3;
            // Get available length
            result =
                config.maxURL -
                    maxHostLength -
                    config.path.length -
                    endPoint$1
                        .replace('{provider}', provider)
                        .replace('{prefix}', prefix)
                        .replace('{icons}', '').length -
                    extraLength;
        }
        // Cache stuff and return result
        const cacheKey = provider + ':' + prefix;
        pathCache$1[cacheKey] = config.path;
        maxLengthCache$1[cacheKey] = result;
        return result;
    }
    /**
     * Prepare params
     */
    const prepare = (provider, prefix, icons) => {
        const results = [];
        // Get maximum icons list length
        const cacheKey = provider + ':' + prefix;
        let maxLength = maxLengthCache$1[cacheKey];
        if (maxLength === void 0) {
            maxLength = calculateMaxLength(provider, prefix);
        }
        // Split icons
        let item = {
            provider,
            prefix,
            icons: [],
        };
        let length = 0;
        icons.forEach((name, index) => {
            length += name.length + 1;
            if (length >= maxLength && index > 0) {
                // Next set
                results.push(item);
                item = {
                    provider,
                    prefix,
                    icons: [],
                };
                length = name.length;
            }
            item.icons.push(name);
        });
        results.push(item);
        return results;
    };
    /**
     * Load icons
     */
    const send = (host, params, status) => {
        const provider = params.provider;
        const prefix = params.prefix;
        const icons = params.icons;
        const iconsList = icons.join(',');
        const cacheKey = provider + ':' + prefix;
        // Create callback prefix
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const cbPrefix = prefix.split('-').shift().slice(0, 3);
        const global = getGlobal();
        // Callback hash
        let cbCounter = hash(provider + ':' + host + ':' + prefix + ':' + iconsList);
        while (global[cbPrefix + cbCounter] !== void 0) {
            cbCounter++;
        }
        const callbackName = cbPrefix + cbCounter;
        const path = pathCache$1[cacheKey] +
            endPoint$1
                .replace('{provider}', provider)
                .replace('{prefix}', prefix)
                .replace('{icons}', iconsList)
                .replace('{cb}', callbackName);
        global[callbackName] = (data) => {
            // Remove callback and complete query
            delete global[callbackName];
            status.done(data);
        };
        // Create URI
        const uri = host + path;
        // console.log('API query:', uri);
        // Create script and append it to head
        const script = document.createElement('script');
        script.type = 'text/javascript';
        script.async = true;
        script.src = uri;
        document.head.appendChild(script);
    };
    // Return functions
    return {
        prepare,
        send,
    };
};
getAPIModule_1$1 = jsonp.getAPIModule = getAPIModule$2;

var fetch$1 = {};

Object.defineProperty(fetch$1, "__esModule", { value: true });
var getAPIModule_1 = fetch$1.getAPIModule = setFetch_1 = fetch$1.setFetch = void 0;
/**
 * Endpoint
 */
const endPoint = '{prefix}.json?icons={icons}';
/**
 * Cache
 */
const maxLengthCache = Object.create(null);
const pathCache = Object.create(null);
/**
 * Fetch function
 *
 * Use this to set 'cross-fetch' in node.js environment if you are retrieving icons on server side.
 * Not needed when using stuff like Next.js or SvelteKit because components use API only on client side.
 */
let fetchModule = null;
try {
    fetchModule = fetch;
}
catch (err) {
    //
}
function setFetch(fetch) {
    fetchModule = fetch;
}
var setFetch_1 = fetch$1.setFetch = setFetch;
/**
 * Return API module
 */
const getAPIModule$1 = (getAPIConfig) => {
    /**
     * Calculate maximum icons list length for prefix
     */
    function calculateMaxLength(provider, prefix) {
        // Get config and store path
        const config = getAPIConfig(provider);
        if (!config) {
            return 0;
        }
        // Calculate
        let result;
        if (!config.maxURL) {
            result = 0;
        }
        else {
            let maxHostLength = 0;
            config.resources.forEach((item) => {
                const host = item;
                maxHostLength = Math.max(maxHostLength, host.length);
            });
            // Get available length
            result =
                config.maxURL -
                    maxHostLength -
                    config.path.length -
                    endPoint
                        .replace('{provider}', provider)
                        .replace('{prefix}', prefix)
                        .replace('{icons}', '').length;
        }
        // Cache stuff and return result
        const cacheKey = provider + ':' + prefix;
        pathCache[cacheKey] = config.path;
        maxLengthCache[cacheKey] = result;
        return result;
    }
    /**
     * Prepare params
     */
    const prepare = (provider, prefix, icons) => {
        const results = [];
        // Get maximum icons list length
        let maxLength = maxLengthCache[prefix];
        if (maxLength === void 0) {
            maxLength = calculateMaxLength(provider, prefix);
        }
        // Split icons
        let item = {
            provider,
            prefix,
            icons: [],
        };
        let length = 0;
        icons.forEach((name, index) => {
            length += name.length + 1;
            if (length >= maxLength && index > 0) {
                // Next set
                results.push(item);
                item = {
                    provider,
                    prefix,
                    icons: [],
                };
                length = name.length;
            }
            item.icons.push(name);
        });
        results.push(item);
        return results;
    };
    /**
     * Load icons
     */
    const send = (host, params, status) => {
        const provider = params.provider;
        const prefix = params.prefix;
        const icons = params.icons;
        const iconsList = icons.join(',');
        const cacheKey = provider + ':' + prefix;
        const path = pathCache[cacheKey] +
            endPoint
                .replace('{provider}', provider)
                .replace('{prefix}', prefix)
                .replace('{icons}', iconsList);
        if (!fetchModule) {
            // Fail: return 424 Failed Dependency (its not meant to be used like that, but it is the best match)
            status.done(void 0, 424);
            return;
        }
        // console.log('API query:', host + path);
        fetchModule(host + path)
            .then((response) => {
            if (response.status !== 200) {
                status.done(void 0, response.status);
                return;
            }
            return response.json();
        })
            .then((data) => {
            if (typeof data !== 'object' || data === null) {
                return;
            }
            // Store cache and complete
            status.done(data);
        })
            .catch((err) => {
            // Error
            status.done(void 0, err.errno);
        });
    };
    // Return functions
    return {
        prepare,
        send,
    };
};
getAPIModule_1 = fetch$1.getAPIModule = getAPIModule$1;

var browserStorage = {};

(function (exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.storeCache = exports.loadCache = exports.mock = exports.emptyList = exports.count = exports.config = void 0;
const storage_1 = storage$2;
// After changing configuration change it in tests/*/fake_cache.ts
// Cache version. Bump when structure changes
const cacheVersion = 'iconify2';
// Cache keys
const cachePrefix = 'iconify';
const countKey = cachePrefix + '-count';
const versionKey = cachePrefix + '-version';
/**
 * Cache expiration
 */
const hour = 3600000;
const cacheExpiration = 168; // In hours
/**
 * Storage configuration
 */
exports.config = {
    local: true,
    session: true,
};
/**
 * Flag to check if storage has been loaded
 */
let loaded = false;
/**
 * Items counter
 */
exports.count = {
    local: 0,
    session: 0,
};
/**
 * List of empty items
 */
exports.emptyList = {
    local: [],
    session: [],
};
let _window = typeof window === 'undefined' ? {} : window;
function mock(fakeWindow) {
    loaded = false;
    _window = fakeWindow;
}
exports.mock = mock;
/**
 * Get global
 *
 * @param key
 */
function getGlobal(key) {
    const attr = key + 'Storage';
    try {
        if (_window &&
            _window[attr] &&
            typeof _window[attr].length === 'number') {
            return _window[attr];
        }
    }
    catch (err) {
        //
    }
    // Failed - mark as disabled
    exports.config[key] = false;
    return null;
}
/**
 * Change current count for storage
 */
function setCount(storage, key, value) {
    try {
        storage.setItem(countKey, value + '');
        exports.count[key] = value;
        return true;
    }
    catch (err) {
        return false;
    }
}
/**
 * Get current count from storage
 *
 * @param storage
 */
function getCount(storage) {
    const count = storage.getItem(countKey);
    if (count) {
        const total = parseInt(count);
        return total ? total : 0;
    }
    return 0;
}
/**
 * Initialize storage
 *
 * @param storage
 * @param key
 */
function initCache(storage, key) {
    try {
        storage.setItem(versionKey, cacheVersion);
    }
    catch (err) {
        //
    }
    setCount(storage, key, 0);
}
/**
 * Destroy old cache
 *
 * @param storage
 */
function destroyCache(storage) {
    try {
        const total = getCount(storage);
        for (let i = 0; i < total; i++) {
            storage.removeItem(cachePrefix + i);
        }
    }
    catch (err) {
        //
    }
}
/**
 * Load icons from cache
 */
const loadCache = () => {
    if (loaded) {
        return;
    }
    loaded = true;
    // Minimum time
    const minTime = Math.floor(Date.now() / hour) - cacheExpiration;
    // Load data from storage
    function load(key) {
        const func = getGlobal(key);
        if (!func) {
            return;
        }
        // Get one item from storage
        const getItem = (index) => {
            const name = cachePrefix + index;
            const item = func.getItem(name);
            if (typeof item !== 'string') {
                // Does not exist
                return false;
            }
            // Get item, validate it
            let valid = true;
            try {
                // Parse, check time stamp
                const data = JSON.parse(item);
                if (typeof data !== 'object' ||
                    typeof data.cached !== 'number' ||
                    data.cached < minTime ||
                    typeof data.provider !== 'string' ||
                    typeof data.data !== 'object' ||
                    typeof data.data.prefix !== 'string') {
                    valid = false;
                }
                else {
                    // Add icon set
                    const provider = data.provider;
                    const prefix = data.data.prefix;
                    const storage = storage_1.getStorage(provider, prefix);
                    valid = storage_1.addIconSet(storage, data.data);
                }
            }
            catch (err) {
                valid = false;
            }
            if (!valid) {
                func.removeItem(name);
            }
            return valid;
        };
        try {
            // Get version
            const version = func.getItem(versionKey);
            if (version !== cacheVersion) {
                if (version) {
                    // Version is set, but invalid - remove old entries
                    destroyCache(func);
                }
                // Empty data
                initCache(func, key);
                return;
            }
            // Get number of stored items
            let total = getCount(func);
            for (let i = total - 1; i >= 0; i--) {
                if (!getItem(i)) {
                    // Remove item
                    if (i === total - 1) {
                        // Last item - reduce country
                        total--;
                    }
                    else {
                        // Mark as empty
                        exports.emptyList[key].push(i);
                    }
                }
            }
            // Update total
            setCount(func, key, total);
        }
        catch (err) {
            //
        }
    }
    for (const key in exports.config) {
        load(key);
    }
};
exports.loadCache = loadCache;
/**
 * Function to cache icons
 */
const storeCache = (provider, data) => {
    if (!loaded) {
        exports.loadCache();
    }
    function store(key) {
        if (!exports.config[key]) {
            return false;
        }
        const func = getGlobal(key);
        if (!func) {
            return false;
        }
        // Get item index
        let index = exports.emptyList[key].shift();
        if (index === void 0) {
            // Create new index
            index = exports.count[key];
            if (!setCount(func, key, index + 1)) {
                return false;
            }
        }
        // Create and save item
        try {
            const item = {
                cached: Math.floor(Date.now() / hour),
                provider,
                data,
            };
            func.setItem(cachePrefix + index, JSON.stringify(item));
        }
        catch (err) {
            return false;
        }
        return true;
    }
    // Attempt to store at localStorage first, then at sessionStorage
    if (!store('local')) {
        store('session');
    }
};
exports.storeCache = storeCache;
}(browserStorage));

var functions = {};

Object.defineProperty(functions, "__esModule", { value: true });
var toggleBrowserCache_1 = functions.toggleBrowserCache = void 0;
const index_1 = browserStorage;
/**
 * Toggle cache
 */
function toggleBrowserCache(storage, value) {
    switch (storage) {
        case 'local':
        case 'session':
            index_1.config[storage] = value;
            break;
        case 'all':
            for (const key in index_1.config) {
                index_1.config[key] = value;
            }
            break;
    }
}
toggleBrowserCache_1 = functions.toggleBrowserCache = toggleBrowserCache;

var shorthand = {};

Object.defineProperty(shorthand, "__esModule", { value: true });
var alignmentFromString_1 = shorthand.alignmentFromString = flipFromString_1 = shorthand.flipFromString = void 0;
const separator = /[\s,]+/;
/**
 * Apply "flip" string to icon customisations
 */
function flipFromString(custom, flip) {
    flip.split(separator).forEach((str) => {
        const value = str.trim();
        switch (value) {
            case 'horizontal':
                custom.hFlip = true;
                break;
            case 'vertical':
                custom.vFlip = true;
                break;
        }
    });
}
var flipFromString_1 = shorthand.flipFromString = flipFromString;
/**
 * Apply "align" string to icon customisations
 */
function alignmentFromString(custom, align) {
    align.split(separator).forEach((str) => {
        const value = str.trim();
        switch (value) {
            case 'left':
            case 'center':
            case 'right':
                custom.hAlign = value;
                break;
            case 'top':
            case 'middle':
            case 'bottom':
                custom.vAlign = value;
                break;
            case 'slice':
            case 'crop':
                custom.slice = true;
                break;
            case 'meet':
                custom.slice = false;
        }
    });
}
alignmentFromString_1 = shorthand.alignmentFromString = alignmentFromString;

var rotate = {};

Object.defineProperty(rotate, "__esModule", { value: true });
var rotateFromString_1 = rotate.rotateFromString = void 0;
/**
 * Get rotation value
 */
function rotateFromString(value) {
    const units = value.replace(/^-?[0-9.]*/, '');
    function cleanup(value) {
        while (value < 0) {
            value += 4;
        }
        return value % 4;
    }
    if (units === '') {
        const num = parseInt(value);
        return isNaN(num) ? 0 : cleanup(num);
    }
    else if (units !== value) {
        let split = 0;
        switch (units) {
            case '%':
                // 25% -> 1, 50% -> 2, ...
                split = 25;
                break;
            case 'deg':
                // 90deg -> 1, 180deg -> 2, ...
                split = 90;
        }
        if (split) {
            let num = parseFloat(value.slice(0, value.length - units.length));
            if (isNaN(num)) {
                return 0;
            }
            num = num / split;
            return num % 1 === 0 ? cleanup(num) : 0;
        }
    }
    return 0;
}
rotateFromString_1 = rotate.rotateFromString = rotateFromString;

/**
 * Default SVG attributes
 */
const svgDefaults = {
    'xmlns': 'http://www.w3.org/2000/svg',
    'xmlns:xlink': 'http://www.w3.org/1999/xlink',
    'aria-hidden': true,
    'role': 'img',
};
/**
 * Aliases for customisations.
 * In Vue 'v-' properties are reserved, so v-align and v-flip must be renamed
 */
let customisationAliases = {};
['horizontal', 'vertical'].forEach(prefix => {
    ['Align', 'Flip'].forEach(suffix => {
        const attr = prefix.slice(0, 1) + suffix;
        const value = {
            attr,
            boolean: suffix === 'Flip',
        };
        // vertical-align
        customisationAliases[prefix + '-' + suffix.toLowerCase()] = value;
        // v-align
        customisationAliases[prefix.slice(0, 1) + '-' + suffix.toLowerCase()] = value;
        // verticalAlign
        customisationAliases[prefix + suffix] = value;
    });
});
/**
 * Render icon
 */
const render = (
// Icon must be validated before calling this function
icon, 
// Partial properties
props) => {
    // Split properties
    const customisations = mergeCustomisations_1(defaults, props);
    const componentProps = { ...svgDefaults };
    // Copy style
    let style = typeof props.style === 'object' && !(props.style instanceof Array)
        ? { ...props.style }
        : {};
    // Get element properties
    for (let key in props) {
        const value = props[key];
        if (value === void 0) {
            continue;
        }
        switch (key) {
            // Properties to ignore
            case 'icon':
            case 'style':
            case 'onLoad':
                break;
            // Boolean attributes
            case 'inline':
            case 'hFlip':
            case 'vFlip':
                customisations[key] =
                    value === true || value === 'true' || value === 1;
                break;
            // Flip as string: 'horizontal,vertical'
            case 'flip':
                if (typeof value === 'string') {
                    flipFromString_1(customisations, value);
                }
                break;
            // Alignment as string
            case 'align':
                if (typeof value === 'string') {
                    alignmentFromString_1(customisations, value);
                }
                break;
            // Color: override style
            case 'color':
                style.color = value;
                break;
            // Rotation as string
            case 'rotate':
                if (typeof value === 'string') {
                    customisations[key] = rotateFromString_1(value);
                }
                else if (typeof value === 'number') {
                    customisations[key] = value;
                }
                break;
            // Remove aria-hidden
            case 'ariaHidden':
            case 'aria-hidden':
                // Vue transforms 'aria-hidden' property to 'ariaHidden'
                if (value !== true && value !== 'true') {
                    delete componentProps['aria-hidden'];
                }
                break;
            default:
                if (customisationAliases[key] !== void 0) {
                    // Aliases for customisations
                    if (customisationAliases[key].boolean &&
                        (value === true || value === 'true' || value === 1)) {
                        // Check for boolean
                        customisations[customisationAliases[key].attr] = true;
                    }
                    else if (!customisationAliases[key].boolean &&
                        typeof value === 'string' &&
                        value !== '') {
                        // String
                        customisations[customisationAliases[key].attr] = value;
                    }
                }
                else if (defaults[key] === void 0) {
                    // Copy missing property if it does not exist in customisations
                    componentProps[key] = value;
                }
        }
    }
    // Generate icon
    const item = iconToSVG_1(icon, customisations);
    // Add icon stuff
    for (let key in item.attributes) {
        componentProps[key] = item.attributes[key];
    }
    if (item.inline &&
        style.verticalAlign === void 0 &&
        style['vertical-align'] === void 0) {
        style.verticalAlign = '-0.125em';
    }
    // Counter for ids based on "id" property to render icons consistently on server and client
    let localCounter = 0;
    const id = props.id;
    // Add innerHTML and style to props
    componentProps['innerHTML'] = replaceIDs_1(item.body, id ? () => id + '-' + localCounter++ : 'iconify-vue-');
    if (Object.keys(style).length > 0) {
        componentProps['style'] = style;
    }
    // Render icon
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.h)('svg', componentProps);
};

/**
 * Enable and disable browser cache
 */
const enableCache = (storage) => toggleBrowserCache_1(storage, true);
const disableCache = (storage) => toggleBrowserCache_1(storage, false);
/* Storage functions */
/**
 * Check if icon exists
 */
const iconExists = storageFunctions.iconExists;
/**
 * Get icon data
 */
const getIcon = storageFunctions.getIcon;
/**
 * List available icons
 */
const listIcons = storageFunctions.listIcons;
/**
 * Add one icon
 */
const addIcon = storageFunctions.addIcon;
/**
 * Add icon set
 */
const addCollection = storageFunctions.addCollection;
/* Builder functions */
/**
 * Calculate icon size
 */
const calculateSize = builderFunctions.calculateSize;
/**
 * Replace unique ids in content
 */
const replaceIDs = builderFunctions.replaceIDs;
/**
 * Build SVG
 */
const buildIcon = builderFunctions.buildIcon;
/* API functions */
/**
 * Load icons
 */
const loadIcons = APIFunctions.loadIcons;
/**
 * Add API provider
 */
const addAPIProvider = APIFunctions.addAPIProvider;
/**
 * Export internal functions that can be used by third party implementations
 */
const _api = APIInternalFunctions;
/**
 * Initialise stuff
 */
// Enable short names
allowSimpleNames_1(true);
// Set API
coreModules.api = API;
// Use Fetch API by default
let getAPIModule = getAPIModule_1;
try {
    if (typeof document !== 'undefined' && typeof window !== 'undefined') {
        // If window and document exist, attempt to load whatever module is available, otherwise use Fetch API
        getAPIModule =
            typeof fetch === 'function' && typeof Promise === 'function'
                ? getAPIModule_1
                : getAPIModule_1$1;
    }
}
catch (err) {
    //
}
setAPIModule_1('', getAPIModule(getAPIConfig_1));
/**
 * Function to enable node-fetch for getting icons on server side
 */
_api.setFetch = (nodeFetch) => {
    setFetch_1(nodeFetch);
    if (getAPIModule !== getAPIModule_1) {
        getAPIModule = getAPIModule_1;
        setAPIModule_1('', getAPIModule(getAPIConfig_1));
    }
};
/**
 * Browser stuff
 */
if (typeof document !== 'undefined' && typeof window !== 'undefined') {
    // Set cache and load existing cache
    coreModules.cache = browserStorage.storeCache;
    browserStorage.loadCache();
    const _window = window;
    // Load icons from global "IconifyPreload"
    if (_window.IconifyPreload !== void 0) {
        const preload = _window.IconifyPreload;
        const err = 'Invalid IconifyPreload syntax.';
        if (typeof preload === 'object' && preload !== null) {
            (preload instanceof Array ? preload : [preload]).forEach(item => {
                try {
                    if (
                    // Check if item is an object and not null/array
                    typeof item !== 'object' ||
                        item === null ||
                        item instanceof Array ||
                        // Check for 'icons' and 'prefix'
                        typeof item.icons !== 'object' ||
                        typeof item.prefix !== 'string' ||
                        // Add icon set
                        !addCollection(item)) {
                        console.error(err);
                    }
                }
                catch (e) {
                    console.error(err);
                }
            });
        }
    }
    // Set API from global "IconifyProviders"
    if (_window.IconifyProviders !== void 0) {
        const providers = _window.IconifyProviders;
        if (typeof providers === 'object' && providers !== null) {
            for (let key in providers) {
                const err = 'IconifyProviders[' + key + '] is invalid.';
                try {
                    const value = providers[key];
                    if (typeof value !== 'object' ||
                        !value ||
                        value.resources === void 0) {
                        continue;
                    }
                    if (!setAPIConfig_1(key, value)) {
                        console.error(err);
                    }
                }
                catch (e) {
                    console.error(err);
                }
            }
        }
    }
}
const Icon = (0,vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
    // Do not inherit other attributes: it is handled by render()
    inheritAttrs: false,
    // Set initial data
    data() {
        return {
            // Mounted status
            mounted: false,
            // Callback counter to trigger re-render
            counter: 0,
        };
    },
    beforeMount() {
        // Current icon name
        this._name = '';
        // Loading
        this._loadingIcon = null;
        // Mark as mounted
        this.mounted = true;
    },
    unmounted() {
        this.abortLoading();
    },
    methods: {
        abortLoading() {
            if (this._loadingIcon) {
                this._loadingIcon.abort();
                this._loadingIcon = null;
            }
        },
        // Get data for icon to render or null
        getIcon(icon$1, onload) {
            // Icon is an object
            if (typeof icon$1 === 'object' &&
                icon$1 !== null &&
                typeof icon$1.body === 'string') {
                // Stop loading
                this._name = '';
                this.abortLoading();
                return {
                    data: icon.fullIcon(icon$1),
                };
            }
            // Invalid icon?
            let iconName;
            if (typeof icon$1 !== 'string' ||
                (iconName = name.stringToIcon(icon$1, false, true)) === null) {
                this.abortLoading();
                return null;
            }
            // Load icon
            const data = getIconData_1(iconName);
            if (data === null) {
                // Icon needs to be loaded
                if (!this._loadingIcon || this._loadingIcon.name !== icon$1) {
                    // New icon to load
                    this.abortLoading();
                    this._name = '';
                    this._loadingIcon = {
                        name: icon$1,
                        abort: API.loadIcons([iconName], () => {
                            this.counter++;
                        }),
                    };
                }
                return null;
            }
            // Icon data is available
            this.abortLoading();
            if (this._name !== icon$1) {
                this._name = icon$1;
                if (onload) {
                    onload(icon$1);
                }
            }
            // Add classes
            const classes = ['iconify'];
            if (iconName.prefix !== '') {
                classes.push('iconify--' + iconName.prefix);
            }
            if (iconName.provider !== '') {
                classes.push('iconify--' + iconName.provider);
            }
            return { data, classes };
        },
    },
    // Render icon
    render() {
        if (!this.mounted) {
            return this.$slots.default ? this.$slots.default() : null;
        }
        // Re-render when counter changes
        this.counter;
        // Get icon data
        const props = this.$attrs;
        const icon = this.getIcon(props.icon, props.onLoad);
        // Validate icon object
        if (!icon) {
            return this.$slots.default ? this.$slots.default() : null;
        }
        // Add classes
        let newProps = props;
        if (icon.classes) {
            newProps = {
                ...props,
                class: (typeof props['class'] === 'string'
                    ? props['class'] + ' '
                    : '') + icon.classes.join(' '),
            };
        }
        // Render icon
        return render(icon.data, newProps);
    },
});




/***/ })

};
;
//# sourceMappingURL=77.app.js.map