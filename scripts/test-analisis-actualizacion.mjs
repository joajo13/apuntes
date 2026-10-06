/**
 * Regression checks for the 2026-10-06 AM2 additions. No external dependencies.
 * Run: node --test scripts/test-analisis-actualizacion.mjs
 * Historical hashes normalize plot functions with toString(), not identity.
 */
import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { createHash } from 'node:crypto';
import { getSubject, getSection, getAggregateSection, getNextSectionWith } from '../js/content.js';
import { renderBlock } from '../js/blocks.js';
import { buildIndex, search } from '../js/buscador.js';
import { getState, getSectionState, markRead, saveQuizScore, markFlashcard } from '../js/storage.js';
import bank from '../js/quizzes2/analisis-matematico-2.js';

const read = path => readFileSync(new URL('../' + path, import.meta.url));
// An isolated import avoids the quiz2 merge performed by content.js.
const raw = (await import('data:text/javascript;base64,' + read('js/subjects/analisis-matematico-2.js').toString('base64'))).default;
const subject = getSubject('analisis-matematico-2');
const ids = ['63', '64', '65'];
const sections = ids.map(id => getSection(subject.id, id));
const strings = value => typeof value === 'string' ? [value] : Array.isArray(value) ? value.flatMap(strings) : value && typeof value === 'object' ? Object.values(value).flatMap(strings) : [];
const textOf = id => strings(getSection(subject.id, id).blocks).join('\n');
const normalize = value => typeof value === 'function' ? value.toString() : Array.isArray(value) ? value.map(normalize) : value && typeof value === 'object' ? Object.fromEntries(Object.entries(value).map(([key, item]) => [key, normalize(item)])) : value;
const hash = value => createHash('sha256').update(JSON.stringify(normalize(value))).digest('hex');
const historical = {
  "order": [
    "1",
    "2",
    "3",
    "4",
    "6",
    "7",
    "5",
    "8",
    "10",
    "11",
    "12",
    "13",
    "23",
    "62",
    "14",
    "15",
    "16",
    "17",
    "18",
    "19",
    "20",
    "21",
    "22",
    "30",
    "31",
    "32",
    "33",
    "34",
    "35",
    "36",
    "37",
    "38",
    "50",
    "51",
    "52",
    "53",
    "54",
    "55",
    "56",
    "57",
    "58",
    "59",
    "60",
    "61"
  ],
  "sections": {
    "1": "c29f5794c081e545ec6b065947a04647f73873321cc344a279961874faa36d3f",
    "2": "9c0a8acd44f681d3d92c3a3fe7ed9c959146015e7224060c3eff86813c7a7ab9",
    "3": "0239ba09376cdace1bf6abec96eb8b238efe9b269bb6daf299137c3d3d72b1c6",
    "4": "1844afa0eb05cd0117121817514b42d03de6a33551a7ad013559dd56c558d6de",
    "5": "d7562e4ee788955e75f30fa924987044d9391c319644fb86f540a6855a2c9a61",
    "6": "474ad82b03c2c3afa93bd21eb6e87470c0bdeebcf9527ac12dda730c210a304a",
    "7": "dcab74929c34ae044adb31492adcb010cdc0ac6979d99cff78ab43a32f913618",
    "8": "36f163387095be109faacae447d978d3868702be4566e49b1565ecd6f4652093",
    "10": "4fb63ee9a5ca2d3bd90c52b573ac9cec6d136a64c021dfe7d26989c3e399cb49",
    "11": "df23b0cb7bd0fe355e11dea193d14cb479dab50f86a60ceb7868524e8b897262",
    "12": "22f69cf07ec0390415802381e585c31245cb727c0d2eedc6b781c858b80fb4db",
    "13": "2c4426ab7e4faa23f60de1aa52ca9f92c484a04f3f2253fd67e2e81278246e64",
    "14": "c821e1bf053f3193dec11fe0b9f9684f2501bdedd71cfd4f58c36334e93d0b2b",
    "15": "f8c80658b68e8c586e9cd47b8e7c5f24908dbcfe7bac8f306164ec9d91a2533f",
    "16": "bc00df0ca50fc5d57e664d19f3887183b9e679af29d0ffd1f5ea8e09f2aa2323",
    "17": "b70f2b1a00ab63cb7f5fd8637dde6ae9bc95302551e37edb9b72db42763df9b2",
    "18": "5ea01cad5ab7914968cfebf58587435a9c0a5e016ce0e22d87eb610e31952a9b",
    "19": "0836568154703d1b614cf2813c7f5619901380e61d260f0ced108af6fa21f322",
    "20": "7b6db39acd6e3e40ed8470914fef2d4ce8eafd3bea24b0fc4ae3a85acf266674",
    "21": "ad051c02ea24985e2069bb4bfab31b3a342db3dbfd7a7435311726592c27fa62",
    "22": "f534fa70b045aabdeb312b9c74489ea1bb8f0b5fd0adcb68c237e40a632d4a9f",
    "23": "dcf24b7dd39593883d7db88db427fd3462358e98913aeb15a6d0ea3eed15f67d",
    "30": "d8bca31e9093e47a41258ef5553a814e26541c2816b613a307931d3db37e3a02",
    "31": "0a507fea772587f3157ab085e13c9edb539be1477f41683d0ee5be1cd33dc94e",
    "32": "19a7cf4e913f3e655445a3e3a98c2b1e893974309414e1f098f41fc28a651797",
    "33": "79693cfdad10305691c8c5210581398a53da9065fc8333c91dab0ba534838003",
    "34": "8817db77b8370dbfaf6ee59e8367905d111b56a282498d5385190adf76fc7fa2",
    "35": "33321b4633274b19b267b38a69c9a11a207979aa5f4210ea6a16ae78cd4c8237",
    "36": "7f3fd1269fef8301cdae362cd96b0902b7885a5c0d2d702386a1b902fead5924",
    "37": "359e67588ab1c0749c1d7b115f25b58751d2d4fae60e0e8d249db9ff1cbd32a9",
    "38": "e07ecb4ecd2cafe53c0e6e3b1c57da54ee7d180c7ee5901b740f2e75147f44a1",
    "50": "cfab6b0ca180712d8b94001cda7e32ee6faffe7b8510d8d18ef3706402da9744",
    "51": "2bc8fa5322dfc652d041b743dda7b8b458c26aea7d6100564e38297e4a46f1c5",
    "52": "fcda8b4a5ea0805db51ceb1e4ba88e4462311ace57e2ccf1b8602c562ba0e4f8",
    "53": "23d69f6fcfeabe9df18a5db912a5b5622c5152706a9b01f3ef2a9f78a51482d3",
    "54": "8741ac869391ec43c1492e1e0df1f3d874601cc5e7cae297c5f9fcc5c24d7fe6",
    "55": "d7e31c2981e0bdee6e23e2f01df2c9d874d662dff90c228e8044bbad04a6a845",
    "56": "d398e8f5400b67965814866df2accd7ad35f9e59e3d3bfec835bd3fea0cc4373",
    "57": "4bc1c6c19573d1556f0503c7eef7a7ee48224017f30d23b87711143a00530013",
    "58": "d7ec4b33c160f9ae83dcfc99ea1256112c91c1e6d5be87868301f98d88386634",
    "59": "3ab8c0d6b02ae541fb378a91ce8f0986cab9e7862c4129c369a4b7f1ffc17672",
    "60": "af5f7d33212218678d59dd1837ab2b72e46f6792c15990bb14ffecd4f631192f",
    "61": "b0169e4dfb8d1f4cb9226db47e8dbda01f5de221bed8d9de8da387b90d96bb26",
    "62": "516ac5537222969b1a8fc626fedfaf18b8bfc5600f1cb321295f6b4de60ced42"
  },
  "bank": {
    "10": "2e4a2eb5e6189cc3da78de2f4bc1d665fb5e0332deda9ef60847041f7d89aa2d",
    "11": "eed0912de48a0d3adbd9a0be3117f280ef03e3e91dbace5b1057aea1bb14094d",
    "12": "657210d729619041dd9531bbe8000c58ad43c438120982523713e2e97a82e748",
    "13": "fa996e174fb530dbeb398510538dda5c5da08c75991f859c3f61601e70fa2341",
    "14": "bfb010471b606f92da9214d07cefd433628ed9c8d19c8551327fc25eb45dfc78",
    "15": "e0262317d433e7137f251e8413efe1620b622d1ea03a193e9df3ba1861719dca",
    "16": "cf09cf664d1a0f51a815e61a4c5e9905afd198e0a467bef9477922d2e5dc4f24",
    "17": "7724e88fa888367d3c614eacc568c4d1d99dbb9b26db3a83deb5e6f688639f38",
    "18": "b2297b4db834b6ea06cff1d4bafa7bd9bbc39cc0c1143a2806277146eda94c53",
    "19": "3399fa9d9e960ede3c8bdde704ad1aa2a4b4c2e1099e3c9366a07f93f525975f",
    "20": "652ad6ea1a4def4033492a5afc03b5d4d9ecc7ec29c9ce90a3b10417244248bd",
    "21": "4fc71eb6cc4c69bf50edf27bf747ce09f2f46f1e87e78fef4127be1496a462f7",
    "22": "e29ecaafbf483199e5d3f1be9b6c706a774e37077430089c00e572a04edb3ca1",
    "30": "2b0b7fd44b6248dd19ca3fcbac9032b4a33775000781f7724c730e63c6c23d54",
    "31": "0b0f3961e891f6505735823fb4acd1abd3fb55b7c22e847085e6b76bbe555d73",
    "32": "58a40347d328f4a12a5b008ad9f2e0312762ec8c8b0b6b30e66bdc8cfb58fcbd",
    "33": "b1fad03570b955e4f4e7f151270b23b6f724d1d5ee8c22c69ca13c0f40624354",
    "34": "db14797fa17cda42ccf50df5f955f4c50f0f9fc1fd05801a2345d886c37f41d5",
    "35": "6b3c4686c68a4cca6bc345aa9c5e542e548b205b5b4cef1f67a384c402793e4f",
    "36": "c35ed575ca1c661e1c4bad609a75973a5f7d5b2061efca1a426c5362e4df3241",
    "37": "27baa06c8cb4c024ebbfc8d2837fe0c15165be8ac2ada1b1f97d076150f8d428",
    "38": "398adb26b364e729bedbb91fa97822aa60b230277f884ca28b4a934a05b6c747",
    "50": "6559644acd2b22b7c098e9324a478a08bf8c0ea40038a8c4cf70e6ca521d9a14",
    "51": "84950c158f0454f2a9c0606485ca6b23a7fd43494a1cf0432c52ec816dd20b28",
    "52": "b85a4e27bfc61d65db18abce721b765bc4dcf69e46962df528366d49e31035b6",
    "53": "0d872f14e5e5d8af016422111ea922dda8f81d3ab3ff8f7836703a88fb121873",
    "54": "d212da6d40d5d2ca2eda8125e7ae39e12ac2e85af79d85e42b184939011b0485",
    "55": "7efb8398e396fc22cdfb84672562f7c816dc78a133a42505509c3540aebdb55f",
    "56": "ebbbb0b02232208a4de2b2a4e4d8b51bdc7fed7d1a0c21d8b86e62004a7c8d3b",
    "57": "22c89a9cd5aeaa796f345cf4dc20b53541f61629939b49e0a966c92eef818ce1",
    "58": "4d44ad4e00918e1f894ac4bdf0e694743de186ad502a265131d7e137f2980da0",
    "59": "1bf6d9ec7a8e2db87267c5ab4c0cb9b319ee19db0410b811675c7166956b151d",
    "60": "e0728a12183de59799e25783ac83b2f7c7738d5c892062fe134310fc3242cbe0",
    "61": "0194a4bec394935f82c156d3491ce300f758f26ad0499ce500483309464f5c73",
    "62": "4b2aee299057eee2eb969820e9e550ed06901ee99387d2dfb5cf332ac1e3e480"
  },
  "pdfs": "eaa8ca97099663e532de9c6c707429723bc823aaff2ff4b60455b36ffca9d6e1",
  "pdfBytes": {
    "pdfs/analisis-matematico-2/1-aplicacion-de-las-derivadas.pdf": "b81b99fb9167ce907ec960ae5495ec602d7adcf68aa4bf142c58592b9aab6caa",
    "pdfs/analisis-matematico-2/2-tp1-extremos-concavidad.pdf": "c16838cd6b3256edbdb6cc285787e2859ed376d63646374ed3c18d9ede1e7201",
    "pdfs/analisis-matematico-2/3-estudio-completo-de-funciones.pdf": "1d97aaaaddab4ac698f0ffd1d0449b8801bf64239327f2ef8b56ba73d970d3f5",
    "pdfs/analisis-matematico-2/4-tp2-estudio-completo-extremos-condicionados.pdf": "28e47e0494d1dd814794b15fce580c24ef060e9322a8bccefc069d516949e34d",
    "pdfs/analisis-matematico-2/0-regla-de-lhopital.pdf": "8cd49ffe99a95c7b7a5ac0949394a856a676384362bfb541dff7eb391cd9f2e8",
    "pdfs/analisis-matematico-2/1-resolucion-tp-extremos-relativos-concavidad.pdf": "149c9bbac1ec5a5a4f0f925d3ed419d64074df0287d489e987d3fcb10944647b",
    "pdfs/analisis-matematico-2/2-resolucion-tp-estudio-completo-extremos-condicionados.pdf": "1bef100f7a4c50b7cc0f2e64d8a05bab3f0d3133312564274612f8e2c7c93f54",
    "pdfs/analisis-matematico-2/3-tp-integrales-inmediatas-descomposicion.pdf": "705eca7a8f61e0f5560626f0db8aca18d4d7bfe4378b717c579dd60c206f980d",
    "pdfs/analisis-matematico-2/4-metodos-de-integracion.pdf": "cd2b2c11d35904bc725de0f7eb83b47ba7323887f78bf2af4008fd090255c2af",
    "pdfs/analisis-matematico-2/4-tp-integrales-indefinidas-2da-parte.pdf": "1ce5999f692aa47ddc3a043afa93cc6fcbdd6000d5a1add4bea78fb3e719cd38",
    "pdfs/analisis-matematico-2/4-resolucion-tp-integrales-indefinidas-2da-parte.pdf": "128eba7fa0e5346c62c08486bdab27d3bc83e83c18125a052b7d9f1267050658",
    "pdfs/analisis-matematico-2/5-integral-definida.pdf": "559dcdcac5c3404cc2eb7f8cb0b9904ca9cca71b81b1592da0f43cd924433668",
    "pdfs/analisis-matematico-2/5-tp-integrales-definidas.pdf": "ed2fb9a510abc1801a4a54107d676533ab7178f4d4044d604db73e34f0a8c3ef",
    "pdfs/analisis-matematico-2/5-resolucion-tp-integrales-definidas.pdf": "3e532bfc388d2ac11b3d1194b7546d03281efcab407e37dbba62a02c49094919",
    "pdfs/analisis-matematico-2/6-integral-impropia.pdf": "1cc27ac3d830e2d742568a0eb56377583aebc7a318d1b58722358db3586c516e",
    "pdfs/analisis-matematico-2/6-tp-integrales-impropias.pdf": "d962374c0da5c8f83f7ad492d26681e71d75fd17c87627b21dcc30f53e9edf0b",
    "pdfs/analisis-matematico-2/6-resolucion-tp-integrales-impropias.pdf": "c27795aebeea5bb958e1748df4c0ee459e3b256bff1490da9b3e9dd6592fbaeb",
    "pdfs/analisis-matematico-2/7-funciones-de-dos-variables-independientes.pdf": "63e9b750eca43f4feebfd4424bdc1c27393f547b16587dcc4d4e46e89a730f59",
    "pdfs/analisis-matematico-2/7-tp-funciones-de-dos-variables-independientes.pdf": "e6f9f8f56a7a4ee360ea3bd6568e16e905014e14b6f2c227084986bc382cf712",
    "pdfs/analisis-matematico-2/7-resolucion-tp-funciones-de-dos-variables-independientes.pdf": "2184634caa94bcb5c89863936c2b7233afd07aec36f47a2cb5f39e5182387b40",
    "pdfs/analisis-matematico-2/9-derivadas-parciales.pdf": "3ae6ce74da594909038f4760e471340c5b05a50e0cfc70fb8712057c15357f71",
    "pdfs/analisis-matematico-2/9-tp-derivadas-parciales.pdf": "8c83c11afb000c8759fe6a6ed2c01b730df9d81b02c1d5ec1fae3400ebbfae42",
    "pdfs/analisis-matematico-2/9-resolucion-ejercicios-derivadas-parciales.pdf": "e6caedb49314da861d94a6d7ba689074b755a87eb7aafea3a437cd2b6bbfa256",
    "pdfs/analisis-matematico-2/11-extremos-relativos-funciones-dos-variables.pdf": "e8a4279426480bb21f49c466935c1208454c8ffc5fd70c0f6da5f6728ea21c9b",
    "pdfs/analisis-matematico-2/11-tp-extremos-relativos-dos-variables.pdf": "07c055693f21f1924508daea48e56b8d444301a98577dccdd4ad32272ed2cccd",
    "pdfs/analisis-matematico-2/11-resolucion-ejercicios-extremos-relativos-dos-variables.pdf": "af5463861963edb1796cdd7f4109c27f2ebc9908190bfa358a8b044e64a1c016",
    "pdfs/analisis-matematico-2/12-extremos-ligados.pdf": "b897061fdf37d978d84368b289d773f7c27ab26c8fd624557e06f41eee3fc553",
    "pdfs/analisis-matematico-2/12-tp-extremos-ligados-condicionados.pdf": "f0859348cfb7bf02dd7fba38da240b8f06f7e4c64902c00143f432f4b0dcec44",
    "pdfs/analisis-matematico-2/12-resolucion-tp-extremos-ligados-condicionados.pdf": "bd185a36ec463adda5773374ebab982588d6f5809552dc8aad961954ca78aa8a"
  },
  "units": {
    "derivadas": "Aplicación de las derivadas",
    "estudio-completo": "Estudio completo de funciones. Extremos condicionados",
    "lhopital": "Regla de L'Hôpital",
    "integracion": "Métodos de integración",
    "integral-definida": "Integrales definidas",
    "integral-impropia": "Integrales impropias",
    "dos-variables": "Funciones de dos o más variables",
    "derivadas-parciales": "Derivadas parciales",
    "extremos-dos-variables": "Extremos relativos de funciones de dos variables",
    "extremos-ligados": "Extremos ligados o condicionados",
    "tps": "Trabajos prácticos"
  }
};
const studyItems = section => [section.quiz, section.quiz2].flatMap(quiz => quiz ? ['tf', 'mc', 'ms'].flatMap(kind => quiz[kind] || []) : []).concat(section.flashcards || [], section.flashcards2 || []);
const banks = sections.flatMap(section => [
  { section, quiz: section.quiz, cards: section.flashcards, suffix: '' },
  { section, quiz: section.quiz2, cards: section.flashcards2, suffix: '2' },
]);
const close = (actual, expected, message, tolerance = 2e-6) => assert.ok(Number.isFinite(actual) && Math.abs(actual - expected) <= tolerance * Math.max(1, Math.abs(expected)), `${message}: ${actual} != ${expected}`);
const derivative = (fn, x) => { const h = 1e-5 * Math.max(1, Math.abs(x)); return (fn(x + h) - fn(x - h)) / (2 * h); };
const verifyDerivative = (primitive, integrand, points, label) => points.forEach(x => close(derivative(primitive, x), integrand(x), `${label} at ${x}`));
const contains = (id, snippet) => assert.ok(textOf(id).includes(snippet), `S${id} must contain ${snippet}`);
const question = id => sections.flatMap(studyItems).find(item => item.id === id);
const selected = id => { const q = question(id); return q.options[q.correctIndex]; };

test('all 44 old lessons, 35 old second banks and their IDs remain unchanged', () => {
  assert.equal(raw.id, 'analisis-matematico-2');
  assert.deepEqual(raw.sections.filter(section => !ids.includes(section.id)).map(section => section.id), historical.order);
  assert.equal(raw.sections.length, 47);
  for (const [id, expected] of Object.entries(historical.sections)) assert.equal(hash(raw.sections.find(section => section.id === id)), expected, `historical section ${id}`);
  for (const [id, expected] of Object.entries(historical.bank)) assert.equal(hash(bank[id]), expected, `historical bank ${id}`);
  assert.equal(Object.keys(bank).length, Object.keys(historical.bank).length + 3);
  for (const [unit, label] of Object.entries(historical.units)) assert.equal(raw.units[unit], label, unit);
});

test('new lessons form the intended sequence without reordering earlier lessons', () => {
  assert.equal(raw.units.diferencial, 'Diferencial de una función');
  assert.deepEqual(sections.map(section => section.unit), ['diferencial', 'integracion', 'integracion']);
  const order = raw.sections.map(section => section.id);
  assert.deepEqual(order.slice(order.indexOf('63'), order.indexOf('14') + 1), ['63', '23', '64', '62', '65', '14']);
  assert.equal(new Set(order).size, order.length);
  for (const feature of ['quiz', 'quiz2', 'flashcards', 'flashcards2']) {
    assert.equal(getNextSectionWith(subject.id, '23', feature).id, '64');
    assert.equal(getNextSectionWith(subject.id, '62', feature).id, '65');
    assert.equal(getNextSectionWith(subject.id, '65', feature).id, '14');
  }
});

test('all 29 original source PDF mappings and bytes are preserved', () => {
  assert.equal(raw.pdfs.length, 29);
  assert.equal(hash(raw.pdfs), historical.pdfs);
  for (const [path, expected] of Object.entries(historical.pdfBytes)) assert.equal(createHash('sha256').update(read(path)).digest('hex'), expected, path);
  assert.ok(!raw.pdfs.some(pdf => /diferencial-de-una-funcion|resolucion.*inmediatas/.test(pdf.path)));
});

test('source mapping, original authorship and prerequisite links are explicit', () => {
  assert.match(textOf('63'), /Diferencial de una función.*páginas 1–2/);
  assert.match(textOf('64'), /Integrales indefinidas.*pp\. 1–3/);
  assert.match(textOf('64'), /p\. 1.*p\. 2.*sección 23/);
  assert.match(textOf('65'), /Trabajo práctico\. Integrales indefinidas\. Inmediatas y por descomposición.*página 1/);
  assert.match(textOf('65'), /Resolución del trabajo práctico.*página 1/);
  for (const id of ids) assert.match(textOf(id), /original/i);
  const links = sections.flatMap(section => [...textOf(section.id).matchAll(/href="([^"]+)"/g)].map(match => match[1].replaceAll('&amp;', '&')));
  assert.ok(links.some(link => link.endsWith('id=23')));
  assert.ok(links.some(link => link.endsWith('id=62')));
  for (const link of links) {
    const url = new URL(link, 'https://study.invalid/');
    assert.equal(url.pathname, '/seccion.html');
    assert.ok(getSection(url.searchParams.get('subject'), url.searchParams.get('id')));
  }
  const doc = read('docs/updates/2026-10-06-analisis-actualizacion.md').toString();
  assert.match(doc, /no.*entrega calificada/i);
  assert.match(doc, /1a, 1b y 3/);
  assert.match(doc, /1g y 2/);
});

test('all new blocks conform to the renderer, with no source images or leaked local paths', () => {
  const allowed = new Set(['p', 'h3', 'ul', 'ol', 'callout', 'math', 'table']);
  assert.deepEqual(sections.map(section => section.blocks.length), [42, 36, 76]);
  for (const section of sections) {
    assert.ok(section.title.length > 10 && section.criollo.length > 20);
    for (const [index, block] of section.blocks.entries()) {
      assert.ok(allowed.has(block.type), `${section.id}/${index}/${block.type}`);
      assert.ok(renderBlock(block, index).length > 0);
      if (block.type === 'h3') {
        assert.ok(block.criollo.length > 10);
        assert.doesNotMatch(block.text, /\$|\\[a-z]+/i);
      }
      if (block.type === 'table') {
        assert.ok(block.headers.length >= 2);
        for (const row of block.rows) assert.equal(row.length, block.headers.length);
      }
      if (block.type === 'callout') assert.ok(['info', 'warning', 'criollo'].includes(block.tone));
      if (block.type === 'math') assert.equal(block.display, true);
    }
    for (const text of strings(section)) {
      assert.doesNotMatch(text, /[\u0000-\u0008\u000b\u000c\u000e-\u001f]/);
      assert.doesNotMatch(text, /<script|onerror\s*=|javascript:|file:\/\/|\/workspace\/|[A-Z]:[\\/]|Bearer\s|token=/i);
      assert.doesNotMatch(text, /\\\\[a-zA-Z]/, 'LaTeX commands must have one decoded backslash');
    }
  }
});

test('two banks per section add 60 valid questions and 36 cards with stable distinct IDs', () => {
  const seen = new Set();
  let questions = 0, cards = 0;
  for (const { section, quiz, cards: flashcards, suffix } of banks) {
    assert.deepEqual([quiz.tf.length, quiz.mc.length, quiz.ms.length, flashcards.length], [4, 4, 2, 6]);
    assert.equal(quiz.tf.filter(item => item.a).length, 2);
    assert.deepEqual([...new Set(quiz.mc.map(item => item.correctIndex))].sort(), [0, 1, 2, 3]);
    for (const kind of ['tf', 'mc', 'ms']) for (const item of quiz[kind]) {
      assert.match(item.id, new RegExp(`^${kind}${suffix}-${section.id}-\\d+$`));
      assert.ok(!seen.has(item.id), item.id); seen.add(item.id);
      assert.ok(item.q.trim().length > 10 && item.explain.trim().length > 10);
      if (kind === 'tf') assert.equal(typeof item.a, 'boolean');
      else {
        assert.equal(item.options.length, kind === 'mc' ? 4 : 5);
        assert.equal(new Set(item.options).size, item.options.length);
        const correct = kind === 'mc' ? [item.correctIndex] : item.correctIndexes;
        assert.ok(Array.isArray(correct));
        assert.equal(new Set(correct).size, correct.length);
        correct.forEach(index => assert.ok(Number.isInteger(index) && index >= 0 && index < item.options.length));
      }
      questions++;
    }
    for (const item of flashcards) {
      assert.match(item.id, new RegExp(`^fc${suffix}-${section.id}-\\d+$`));
      assert.ok(!seen.has(item.id), item.id); seen.add(item.id);
      assert.ok(item.front.trim() && item.back.trim()); cards++;
    }
  }
  assert.deepEqual([questions, cards, seen.size], [60, 36, 96]);
  const oldIds = new Set(subject.sections.filter(section => !ids.includes(section.id)).flatMap(studyItems).map(item => item.id));
  for (const id of seen) assert.ok(!oldIds.has(id), id);
});

test('anti-spoiler banks retain distinct prompts, balanced keys and valid zero-answer selections', () => {
  const prompts = new Set(); let longest = 0, count = 0;
  for (const { quiz, suffix } of banks) {
    for (const item of [...quiz.tf, ...quiz.mc, ...quiz.ms]) {
      const prompt = item.q.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
      assert.ok(!prompts.has(prompt), item.id); prompts.add(prompt);
    }
    if (suffix !== '2') continue;
    for (const item of quiz.mc) {
      const lengths = item.options.map(option => option.length);
      if (lengths[item.correctIndex] > Math.max(...lengths.filter((_, i) => i !== item.correctIndex))) longest++;
      count++;
    }
  }
  assert.ok(longest / count <= 0.45, `${longest}/${count} uniquely longest correct options`);
  for (const id of ['ms-63-2', 'ms-64-2', 'ms2-64-2', 'ms-65-2', 'ms2-65-2']) assert.deepEqual(question(id).correctIndexes, []);
});

test('aggregate quizzes and flashcards include every old and new identity exactly once', () => {
  for (const [set, qKey, fKey] of [['1', 'quiz', 'flashcards'], ['2', 'quiz2', 'flashcards2']]) {
    const aggregate = getAggregateSection(subject.id, set);
    for (const kind of ['tf', 'mc', 'ms']) {
      const expected = subject.sections.flatMap(section => section[qKey]?.[kind] || []);
      assert.deepEqual(aggregate[qKey][kind].map(item => item.id), expected.map(item => item.id));
      assert.equal(new Set(expected.map(item => item.id)).size, expected.length);
      for (const section of sections) for (const item of section[qKey][kind]) assert.equal(aggregate[qKey][kind].find(other => other.id === item.id)._sec.id, section.id);
    }
    assert.deepEqual(aggregate[fKey].map(item => item.id), subject.sections.flatMap(section => section[fKey] || []).map(item => item.id));
  }
});

test('new lessons are indexed and searchable with their stable URLs', () => {
  const index = buildIndex();
  for (const [id, query] of [['63', 'diferencial aproximacion'], ['64', 'linealidad descomposicion'], ['65', 'resolucion comentada verificada']]) {
    assert.ok(index.some(item => item.subjectId === subject.id && item.sectionId === id));
    assert.ok(search(query, { index, subjectId: subject.id }).some(item => item.subjectId === subject.id && item.sectionId === id), query);
  }
});

test('progress for all historical lesson IDs, old cards and existing exams survives new lesson writes', () => {
  const initialSections = Object.fromEntries(historical.order.map(id => [id, { read: true, lastQuizScore: { correct: 2, total: 3, at: '2026-10-01T12:00:00Z' }, knownFlashcards: [`fc-${id}-1`, `fc2-${id}-1`] }]));
  const initial = { schemaVersion: 2, subjects: { [subject.id]: { sections: initialSections }, 'algebra-lineal': { sections: { '1': { read: true, knownFlashcards: ['fc-1-1'] } } } }, examProgress: { [subject.id]: { '2': { current: 5, correct: 4, total: 300 } } } };
  const store = new Map([['study-app-state', JSON.stringify(initial)]]);
  const oldStorage = globalThis.localStorage;
  globalThis.localStorage = { getItem: key => store.get(key) ?? null, setItem: (key, value) => store.set(key, value) };
  try {
    for (const id of ids) {
      assert.equal(getSectionState(subject.id, id).read, false);
      markRead(subject.id, id); saveQuizScore(subject.id, id, { correct: 9, total: 10 });
      markFlashcard(subject.id, id, `fc-${id}-1`, true); markFlashcard(subject.id, id, `fc2-${id}-1`, true);
      assert.deepEqual(getSectionState(subject.id, id).knownFlashcards, [`fc-${id}-1`, `fc2-${id}-1`]);
    }
    const after = getState();
    for (const id of historical.order) assert.deepEqual(after.subjects[subject.id].sections[id], initialSections[id]);
    assert.deepEqual(after.subjects['algebra-lineal'], initial.subjects['algebra-lineal']);
    assert.deepEqual(after.examProgress, initial.examProgress);
    assert.deepEqual([...store.keys()], ['study-app-state']);
  } finally { if (oldStorage === undefined) delete globalThis.localStorage; else globalThis.localStorage = oldStorage; }
});

test('differential examples separate exact increments from tangent estimates', () => {
  const cases = [
    [x => x * x, x => 2 * x, 3, 0.1, 0.6, 0.61, 9.6],
    [Math.sqrt, x => 1 / (2 * Math.sqrt(x)), 25, 0.2, 0.02, Math.sqrt(25.2) - 5, 5.02],
    [x => 4 * x + 1, () => 4, 2, -0.05, -0.2, -0.2, 8.8],
    [x => x * x, x => 2 * x, 0, 0.1, 0, 0.01, 0],
    [x => x * x, x => 2 * x, 2, 0.05, 0.2, 0.2025, 4.2],
    [Math.sqrt, x => 1 / (2 * Math.sqrt(x)), 36, 0.12, 0.01, Math.sqrt(36.12) - 6, 6.01],
    [x => 3 * x - 2, () => 3, 1, -0.2, -0.6, -0.6, 0.4],
    [x => x * x, x => 2 * x, -1, 0.02, -0.04, -0.0396, 0.96],
    [Math.sqrt, x => 1 / (2 * Math.sqrt(x)), 9, -0.06, -0.01, Math.sqrt(8.94) - 3, 2.99],
  ];
  for (const [f, df, x, dx, dy, delta, estimate] of cases) {
    close(df(x) * dx, dy, 'dy', 1e-12); close(f(x + dx) - f(x), delta, 'delta', 1e-12); close(f(x) + dy, estimate, 'estimate', 1e-12);
  }
  for (const snippet of ['0{,}61', '25{,}2004', '$dy=0$ pero $\\Delta y=0{,}01$', "dy=f'(x_0)\\,dx."]) contains('63', snippet);
  assert.equal(selected('mc-63-1'), '$0{,}2$'); assert.equal(selected('mc-63-2'), '$0{,}61$');
  assert.equal(selected('mc-63-4'), '$6{,}01$'); assert.equal(selected('mc2-63-2'), '$0{,}96$');
  assert.deepEqual(question('ms-63-1').correctIndexes, [0, 1, 2]);
  assert.deepEqual(question('ms2-63-1').correctIndexes, [0, 2, 3]);
  assert.match(textOf('63'), /No hay una regla universal/);
});

test('differentiation examples use the product rule and radian trigonometry', () => {
  verifyDerivative(x => 3 * x ** 2 - 4 * x + 2, x => 6 * x - 4, [-2, 0, 2], 'polynomial');
  verifyDerivative(Math.sqrt, x => 1 / (2 * Math.sqrt(x)), [0.5, 1, 9], 'square root');
  verifyDerivative(x => x * Math.cos(x), x => Math.cos(x) - x * Math.sin(x), [-1, 0, 1], 'product');
  assert.equal(selected('mc2-63-1'), '$(6x-4)\\,dx$');
  assert.equal(selected('mc2-63-4'), '$(\\cos x-x\\sin x)\\,dx$');
  contains('63', 'radianes'); contains('63', '$x>0$');
});

test('integration conditions explicitly repair the omission without editing historical S23', () => {
  for (const snippet of ['$a>0$', '$a\\ne1$', '$n\\ne-1$', '$\\ln|x|$', '$-1<x<1$', 'Aclaración de la sección 23']) contains('64', snippet);
  assert.match(textOf('64'), /Con \$a=1\$.*primitiva es \$x\$/);
  assert.equal(hash(raw.sections.find(section => section.id === '23')), historical.sections['23']);
  for (const a of [0.5, 2, 5]) verifyDerivative(x => a ** x / Math.log(a), x => a ** x, [-1, 0, 1], `base ${a}`);
  assert.equal(Math.log(1), 0);
  assert.match(textOf('64'), /constante puede elegirse por separado/);
  assert.match(textOf('64'), /Una cancelación posterior no borra/);
});

test('all six original indefinite-integral examples differentiate to their integrands', () => {
  const cases = [
    [String.raw`x^4-2\sin x+5x+C.`, x => x ** 4 - 2 * Math.sin(x) + 5 * x, x => 4 * x ** 3 - 2 * Math.cos(x) + 5, [-2, 0, 2]],
    [String.raw`2x^{3/2}+x^{-2}+C.`, x => 2 * x ** 1.5 + x ** -2, x => 3 * Math.sqrt(x) - 2 / x ** 3, [0.5, 1, 3]],
    [String.raw`x\ln5+4\ln|x|+C.`, x => x * Math.log(5) + 4 * Math.log(Math.abs(x)), x => Math.log(5) + 4 / x, [-2, -0.5, 0.5, 2]],
    [String.raw`\frac45x^5-4x^3+9x+C.`, x => 4 / 5 * x ** 5 - 4 * x ** 3 + 9 * x, x => (2 * x ** 2 - 3) ** 2, [-2, 0, 2]],
    [String.raw`\frac32x^2-2\ln|x|+C.`, x => 1.5 * x ** 2 - 2 * Math.log(Math.abs(x)), x => (6 * x ** 3 - 4 * x) / (2 * x ** 2), [-2, -0.5, 0.5, 2]],
    [String.raw`2\tan x-3\arctan x+C.`, x => 2 * Math.tan(x) - 3 * Math.atan(x), x => 2 / Math.cos(x) ** 2 - 3 / (1 + x ** 2), [-0.7, 0, 0.7]],
  ];
  for (const [snippet, primitive, integrand, points] of cases) { contains('64', snippet); verifyDerivative(primitive, integrand, points, snippet); }
});

test('the four additional table entries and inverse-trig endpoints are correct', () => {
  verifyDerivative(Math.tan, x => 1 / Math.cos(x) ** 2, [-0.7, 0, 0.7], 'tan');
  verifyDerivative(Math.asin, x => 1 / Math.sqrt(1 - x ** 2), [-0.7, 0, 0.7], 'arcsin');
  verifyDerivative(Math.acos, x => -1 / Math.sqrt(1 - x ** 2), [-0.7, 0, 0.7], 'arccos');
  verifyDerivative(Math.atan, x => 1 / (1 + x ** 2), [-2, 0, 2], 'arctan');
  for (const x of [-0.7, 0, 0.7]) close(2 * Math.asin(x) + 2 * Math.acos(x), Math.PI, 'constant difference');
  for (const x of [-1, 1]) assert.equal(Math.sqrt(1 - x ** 2), 0);
  assert.equal(question('tf-64-3').a, true); assert.equal(question('tf2-64-3').a, false);
});

test('all eight S64 multiple-choice answers pass independent derivative checks', () => {
  const cases = [
    ['mc-64-1', String.raw`$2x^3-4x+C$`, x => 2 * x ** 3 - 4 * x, x => 6 * x ** 2 - 4, [-1, 0, 2]],
    ['mc-64-2', String.raw`$2\arccos x+C$`, x => 2 * Math.acos(x), x => -2 / Math.sqrt(1 - x ** 2), [-0.7, 0, 0.7]],
    ['mc-64-3', String.raw`$\frac{x^3}{3}-4x^2+16x+C$`, x => x ** 3 / 3 - 4 * x ** 2 + 16 * x, x => (x - 4) ** 2, [-1, 0, 2]],
    ['mc-64-4', String.raw`$x^2+3x+C$`, x => x ** 2 + 3 * x, x => (4 * x ** 2 + 6 * x) / (2 * x), [-2, -0.5, 0.5, 2]],
    ['mc2-64-1', String.raw`$\frac{25}{3}x^3-10x^2+4x+C$`, x => 25 / 3 * x ** 3 - 10 * x ** 2 + 4 * x, x => (5 * x - 2) ** 2, [-1, 0, 2]],
    ['mc2-64-2', String.raw`$\frac43x^{3/2}-\frac3x+C$`, x => 4 / 3 * x ** 1.5 - 3 / x, x => 2 * Math.sqrt(x) + 3 / x ** 2, [0.5, 1, 2]],
    ['mc2-64-3', String.raw`$x\ln2-3\sin x+C$`, x => x * Math.log(2) - 3 * Math.sin(x), x => Math.log(2) - 3 * Math.cos(x), [-1, 0, 1]],
    ['mc2-64-4', String.raw`$3\arcsin x+2\arctan x+C$`, x => 3 * Math.asin(x) + 2 * Math.atan(x), x => 3 / Math.sqrt(1 - x ** 2) + 2 / (1 + x ** 2), [-0.7, 0, 0.7]],
  ];
  for (const [id, answer, primitive, integrand, points] of cases) { assert.equal(selected(id), answer); verifyDerivative(primitive, integrand, points, id); }
  assert.deepEqual(question('ms2-64-1').correctIndexes, [1, 3]);
});

test('I0 clearly distinguishes the three official errors and two blank responses', () => {
  const warnings = getSection(subject.id, '65').blocks.filter(block => block.type === 'callout' && block.tone === 'warning').map(block => block.text).join('\n');
  for (const item of ['ítem 1a', 'ítem 1b', 'ejercicio 3']) assert.ok(warnings.includes(item), item);
  assert.match(textOf('65'), /hoja oficial deja 1g en blanco/);
  assert.match(textOf('65'), /ejercicio 2 también está en blanco/);
  assert.match(textOf('65'), /resolución independiente.*no una respuesta atribuida/);
  assert.match(textOf('65'), /reconstrucción es independiente/);
  for (const item of ['1a', '1b', '1c', '1d', '1e', '1f', '1g', '1h', '2', '3', '4']) assert.ok(getSection(subject.id, '65').blocks.some(block => block.type === 'h3' && block.text.startsWith(`${item} ·`)), item);
  close(derivative(x => -1 / x ** 2, 2), 2 / 2 ** 3, 'wrong official 1a');
  assert.notEqual(2 / 2 ** 3, -2 / 2 ** 3);
  close(derivative(x => 3 / 7 * Math.cbrt(x) ** 7, 8), 16, 'wrong official 1b');
  assert.notEqual(16, 1 / Math.cbrt(8 ** 4));
  close(derivative(x => x ** 3 + 2 * x, 1), 5, 'wrong official slope');
  assert.equal(selected('mc2-65-3'), '$5$');
});

test('all eight I0 primitives satisfy the integrands on every applicable real branch', () => {
  const both = [-8, -2, -0.5, 0.5, 2, 8];
  const cases = [
    [String.raw`\boxed{\frac{1}{x^2}+C}`, x => 1 / x ** 2, x => -2 / x ** 3, both],
    [String.raw`\boxed{-\frac{3}{\sqrt[3]{x}}+C}`, x => -3 / Math.cbrt(x), x => 1 / Math.cbrt(x ** 4), both],
    [String.raw`\boxed{-\frac{3}{7\sqrt[3]{x^7}}+C}`, x => -3 / (7 * Math.cbrt(x ** 7)), x => Math.cbrt((x ** -2) ** 5), both],
    [String.raw`\boxed{\frac{x^2}{6}+3\ln|x|+C}`, x => x ** 2 / 6 + 3 * Math.log(Math.abs(x)), x => x / 3 + 3 / x, both],
    [String.raw`\boxed{\frac{e^{(\ln2+1)x}}{\ln2+1}+C}`, x => Math.exp((Math.log(2) + 1) * x) / (Math.log(2) + 1), x => 2 ** x * Math.exp(x), [-2, 0, 2]],
    [String.raw`\boxed{(x-2)^3+C}`, x => (x - 2) ** 3, x => 3 * (x - 2) ** 2, [-2, 0, 2, 3]],
    [String.raw`\boxed{\frac{3x^4}{8}-\sqrt{x}+C}`, x => 3 * x ** 4 / 8 - Math.sqrt(x), x => (3 * x ** 4 - Math.sqrt(x)) / (2 * x), [0.5, 1, 2]],
    [String.raw`\frac{25}{3}x^3-\frac{30}{7}(\sqrt[3]{x})^7+\frac35(\sqrt[3]{x})^5+C`, x => 25 / 3 * x ** 3 - 30 / 7 * Math.cbrt(x) ** 7 + 3 / 5 * Math.cbrt(x) ** 5, x => (5 * x - Math.cbrt(x)) ** 2, both],
  ];
  for (const [snippet, primitive, integrand, points] of cases) { contains('65', snippet); verifyDerivative(primitive, integrand, points, snippet); }
  for (const x of both) close((x - 2) ** 3 - (x ** 3 - 6 * x ** 2 + 12 * x), -8, 'equivalent family');
  assert.equal(selected('mc-65-1'), '$-3/\\sqrt[3]{x}+C$');
  assert.equal(selected('mc2-65-1'), '$-\\frac{3}{7\\sqrt[3]{x^7}}+C$');
  assert.equal(selected('mc-65-2'), '$\\ln2+1$');
  assert.equal(selected('mc2-65-2'), '$-10x\\sqrt[3]{x}$');
});

test('I0 item 1h has derivative zero at zero from both real sides', () => {
  const F = x => 25 / 3 * x ** 3 - 30 / 7 * Math.cbrt(x) ** 7 + 3 / 5 * Math.cbrt(x) ** 5;
  assert.equal(F(0), 0);
  for (const sign of [-1, 1]) {
    const quotients = [1e-6, 1e-9, 1e-12].map(h => F(sign * h) / (sign * h));
    assert.ok(quotients.every(Number.isFinite));
    assert.ok(Math.abs(quotients[2]) < Math.abs(quotients[1]) && Math.abs(quotients[1]) < Math.abs(quotients[0]));
    close(quotients[2], 0, 'two-sided derivative', 1e-8);
  }
  contains('65', String.raw`\longrightarrow0=F_h'(0)`);
  assert.equal(question('tf2-65-4').a, true);
  assert.equal(selected('mc2-65-4'), '$(0,\\infty)$');
  assert.deepEqual(question('ms2-65-1').correctIndexes, [0, 2, 3]);
});

test('I0 exercises 2, 3 and 4 satisfy every point, derivative and local-maximum condition', () => {
  const f2 = x => -(x ** 3) + 2 * x ** 2 - 5 * x + 3;
  const d2 = x => -3 * x ** 2 + 4 * x - 5;
  const f3 = x => x ** 3 - 2 * x + 4;
  const d3 = x => 3 * x ** 2 - 2;
  const f4 = x => x ** 3 / 3 - 2 * x ** 2 + 3 * x - 1 / 3;
  const d4 = x => x ** 2 - 4 * x + 3;
  for (const [f, df, ddf] of [[f2, d2, x => -6 * x + 4], [f3, d3, x => 6 * x], [f4, d4, x => 2 * x - 4]]) {
    verifyDerivative(f, df, [-2, 0, 1, 2], 'reconstructed first derivative');
    verifyDerivative(df, ddf, [-2, 0, 1, 2], 'reconstructed second derivative');
  }
  assert.equal(f2(1), -1); assert.equal(f2(2), -7); assert.equal(d2(1), -4); assert.equal(d2(2), -9);
  assert.equal(f3(1), 3); assert.equal(d3(1), 1);
  for (const x of [-2, 0, 1, 2]) close(f3(1) + d3(1) * (x - 1), x + 2, 'given tangent');
  close(f4(1), 1, 'maximum value'); assert.equal(d4(1), 0); assert.ok(2 * 1 - 4 < 0);
  assert.ok(d4(0.9) > 0 && d4(1.1) < 0); assert.ok(f4(100) > f4(1));
  for (const snippet of ['f(x)=-x^3+2x^2-5x+3', 'f(x)=x^3-2x+4', String.raw`f(x)=\frac{x^3}{3}-2x^2+3x-\frac13`]) contains('65', snippet);
  assert.equal(selected('mc-65-3'), '$-x^3+2x^2-5x+3$'); assert.equal(selected('mc-65-4'), "$f''(1)=-2$");
  assert.deepEqual(question('ms-65-1').correctIndexes, [0, 1, 3]);
  assert.equal(question('tf2-65-3').a, false);
  assert.match(textOf('65'), /máximo local estricto/);
  assert.match(textOf('65'), /no existe máximo absoluto/);
});
