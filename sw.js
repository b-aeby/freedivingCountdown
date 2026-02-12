/**
 * PWA: Freediving Countdown
 * Strategy: Network-First (UI/Logic) + Cache-First (Media/Flags)
 */

const CACHE_NAME = 'fridivingCountdown-v1';

// 1. Core App Shell: Essential for the app to function
const coreAssets = [
  'index.html',
  'sw.js',
  'manifest.json',
  'css/styles.css',
  'js/settings.js',
  'js/TimeDelta.js',
  'js/freedivingCountdown.js',
  'favicon.png'
];

// 2. Vendor Libraries: Change rarely
const vendorAssets = [
  'vendor/luxon/luxon.min.js',
  'vendor/jquery/jquery-3.7.1.min.js',
  'vendor/tabulator/css/tabulator_bootstrap5.min.css',
  'vendor/tabulator/js/tabulator.min.js',
  'vendor/bootstrap/css/bootstrap.min.css',
  'vendor/bootstrap/js/bootstrap.bundle.min.js',
  'vendor/sheet-js/xlsx.full.min.js',
  'fonts/DigitalNumbers-Regular.ttf'
];

// 3. Media & Flags: Large or numerous files (Cache-First)
const mediaAssets = [
  // Audio files
  'audio/whiteNoise_3s.mp3',
  'audio/otm120.mp3',
  'audio/otm90.mp3',
  'audio/otm60.mp3',
  'audio/otm30.mp3',
  'audio/ot.mp3',
  'audio/plus_1.mp3',
  'audio/1.mp3',
  'audio/2.mp3',
  'audio/3.mp3',
  'audio/4.mp3',
  'audio/5.mp3',
  'audio/6.mp3',
  'audio/7.mp3',
  'audio/8.mp3',
  'audio/9.mp3',
  'audio/10.mp3',
  'audio/20.mp3',
  'audio/25.mp3',
  'audio/26.mp3',
  'audio/27.mp3',
  'audio/28.mp3',
  'audio/29.mp3',
  'audio/30.mp3',
  'audio/start_cancelled.mp3',

  // flags:
  'img/flags/h40/mq.png',
  'img/flags/h40/jo.png',
  'img/flags/h40/ms.png',
  'img/flags/h40/tr.png',
  'img/flags/h40/vn.png',
  'img/flags/h40/ke.png',
  'img/flags/h40/ly.png',
  'img/flags/h40/gb.png',
  'img/flags/h40/sh.png',
  'img/flags/h40/mf.png',
  'img/flags/h40/cv.png',
  'img/flags/h40/nl.png',
  'img/flags/h40/th.png',
  'img/flags/h40/fm.png',
  'img/flags/h40/me.png',
  'img/flags/h40/ca.png',
  'img/flags/h40/mt.png',
  'img/flags/h40/kw.png',
  'img/flags/h40/gq.png',
  'img/flags/h40/cd.png',
  'img/flags/h40/mp.png',
  'img/flags/h40/pm.png',
  'img/flags/h40/km.png',
  'img/flags/h40/lr.png',
  'img/flags/h40/tf.png',
  'img/flags/h40/il.png',
  'img/flags/h40/sz.png',
  'img/flags/h40/pl.png',
  'img/flags/h40/fk.png',
  'img/flags/h40/br.png',
  'img/flags/h40/py.png',
  'img/flags/h40/ee.png',
  'img/flags/h40/hr.png',
  'img/flags/h40/cz.png',
  'img/flags/h40/ni.png',
  'img/flags/h40/kz.png',
  'img/flags/h40/cy.png',
  'img/flags/h40/sy.png',
  'img/flags/h40/md.png',
  'img/flags/h40/pf.png',
  'img/flags/h40/um.png',
  'img/flags/h40/ws.png',
  'img/flags/h40/fj.png',
  'img/flags/h40/fi.png',
  'img/flags/h40/ad.png',
  'img/flags/h40/io.png',
  'img/flags/h40/gh.png',
  'img/flags/h40/gb-sct.png',
  'img/flags/h40/gs.png',
  'img/flags/h40/is.png',
  'img/flags/h40/mx.png',
  'img/flags/h40/ne.png',
  'img/flags/h40/zm.png',
  'img/flags/h40/mu.png',
  'img/flags/h40/pe.png',
  'img/flags/h40/tz.png',
  'img/flags/h40/mk.png',
  'img/flags/h40/xk.png',
  'img/flags/h40/na.png',
  'img/flags/h40/lk.png',
  'img/flags/h40/lv.png',
  'img/flags/h40/gg.png',
  'img/flags/h40/si.png',
  'img/flags/h40/rs.png',
  'img/flags/h40/sx.png',
  'img/flags/h40/bg.png',
  'img/flags/h40/ru.png',
  'img/flags/h40/bm.png',
  'img/flags/h40/cx.png',
  'img/flags/h40/yt.png',
  'img/flags/h40/sa.png',
  'img/flags/h40/tn.png',
  'img/flags/h40/li.png',
  'img/flags/h40/hn.png',
  'img/flags/h40/sd.png',
  'img/flags/h40/im.png',
  'img/flags/h40/kg.png',
  'img/flags/h40/jp.png',
  'img/flags/h40/pw.png',
  'img/flags/h40/gm.png',
  'img/flags/h40/re.png',
  'img/flags/h40/mm.png',
  'img/flags/h40/pg.png',
  'img/flags/h40/se.png',
  'img/flags/h40/ci.png',
  'img/flags/h40/us.png',
  'img/flags/h40/mz.png',
  'img/flags/h40/vi.png',
  'img/flags/h40/gb-wls.png',
  'img/flags/h40/no.png',
  'img/flags/h40/lb.png',
  'img/flags/h40/kp.png',
  'img/flags/h40/id.png',
  'img/flags/h40/pa.png',
  'img/flags/h40/ae.png',
  'img/flags/h40/bb.png',
  'img/flags/h40/at.png',
  'img/flags/h40/qa.png',
  'img/flags/h40/nr.png',
  'img/flags/h40/ec.png',
  'img/flags/h40/by.png',
  'img/flags/h40/to.png',
  'img/flags/h40/rw.png',
  'img/flags/h40/kh.png',
  'img/flags/h40/ao.png',
  'img/flags/h40/sv.png',
  'img/flags/h40/cu.png',
  'img/flags/h40/bh.png',
  'img/flags/h40/tl.png',
  'img/flags/h40/bo.png',
  'img/flags/h40/mr.png',
  'img/flags/h40/pk.png',
  'img/flags/h40/ht.png',
  'img/flags/h40/eh.png',
  'img/flags/h40/tk.png',
  'img/flags/h40/cl.png',
  'img/flags/h40/ua.png',
  'img/flags/h40/aw.png',
  'img/flags/h40/do.png',
  'img/flags/h40/ve.png',
  'img/flags/h40/sj.png',
  'img/flags/h40/gl.png',
  'img/flags/h40/hm.png',
  'img/flags/h40/gn.png',
  'img/flags/h40/kr.png',
  'img/flags/h40/in.png',
  'img/flags/h40/mv.png',
  'img/flags/h40/nu.png',
  'img/flags/h40/sb.png',
  'img/flags/h40/hu.png',
  'img/flags/h40/uy.png',
  'img/flags/h40/va.png',
  'img/flags/h40/fo.png',
  'img/flags/h40/hk.png',
  'img/flags/h40/gu.png',
  'img/flags/h40/cr.png',
  'img/flags/h40/as.png',
  'img/flags/h40/vc.png',
  'img/flags/h40/gt.png',
  'img/flags/h40/es.png',
  'img/flags/h40/jm.png',
  'img/flags/h40/lt.png',
  'img/flags/h40/cf.png',
  'img/flags/h40/pt.png',
  'img/flags/h40/ai.png',
  'img/flags/h40/nf.png',
  'img/flags/h40/lc.png',
  'img/flags/h40/ga.png',
  'img/flags/h40/ye.png',
  'img/flags/h40/fr.png',
  'img/flags/h40/sk.png',
  'img/flags/h40/gy.png',
  'img/flags/h40/al.png',
  'img/flags/h40/am.png',
  'img/flags/h40/ml.png',
  'img/flags/h40/kn.png',
  'img/flags/h40/sn.png',
  'img/flags/h40/bt.png',
  'img/flags/h40/et.png',
  'img/flags/h40/sg.png',
  'img/flags/h40/mn.png',
  'img/flags/h40/mg.png',
  'img/flags/h40/nz.png',
  'img/flags/h40/az.png',
  'img/flags/h40/ky.png',
  'img/flags/h40/my.png',
  'img/flags/h40/gw.png',
  'img/flags/h40/iq.png',
  'img/flags/h40/om.png',
  'img/flags/h40/ir.png',
  'img/flags/h40/ug.png',
  'img/flags/h40/gb-eng.png',
  'img/flags/h40/ba.png',
  'img/flags/h40/gd.png',
  'img/flags/h40/eg.png',
  'img/flags/h40/cg.png',
  'img/flags/h40/bi.png',
  'img/flags/h40/bz.png',
  'img/flags/h40/nc.png',
  'img/flags/h40/np.png',
  'img/flags/h40/be.png',
  'img/flags/h40/it.png',
  'img/flags/h40/tg.png',
  'img/flags/h40/gi.png',
  'img/flags/h40/gp.png',
  'img/flags/h40/bf.png',
  'img/flags/h40/ax.png',
  'img/flags/h40/tc.png',
  'img/flags/h40/bl.png',
  'img/flags/h40/cn.png',
  'img/flags/h40/tv.png',
  'img/flags/h40/tw.png',
  'img/flags/h40/st.png',
  'img/flags/h40/tm.png',
  'img/flags/h40/dk.png',
  'img/flags/h40/mw.png',
  'img/flags/h40/ge.png',
  'img/flags/h40/bs.png',
  'img/flags/h40/ch.png',
  'img/flags/h40/er.png',
  'img/flags/h40/ar.png',
  'img/flags/h40/ng.png',
  'img/flags/h40/je.png',
  'img/flags/h40/bj.png',
  'img/flags/h40/vg.png',
  'img/flags/h40/ph.png',
  'img/flags/h40/mc.png',
  'img/flags/h40/td.png',
  'img/flags/h40/ro.png',
  'img/flags/h40/ps.png',
  'img/flags/h40/bn.png',
  'img/flags/h40/gr.png',
  'img/flags/h40/bw.png',
  'img/flags/h40/so.png',
  'img/flags/h40/gf.png',
  'img/flags/h40/sr.png',
  'img/flags/h40/aq.png',
  'img/flags/h40/tt.png',
  'img/flags/h40/la.png',
  'img/flags/h40/bv.png',
  'img/flags/h40/ls.png',
  'img/flags/h40/za.png',
  'img/flags/h40/mo.png',
  'img/flags/h40/lu.png',
  'img/flags/h40/cw.png',
  'img/flags/h40/co.png',
  'img/flags/h40/de.png',
  'img/flags/h40/bq.png',
  'img/flags/h40/ss.png',
  'img/flags/h40/wf.png',
  'img/flags/h40/dm.png',
  'img/flags/h40/cc.png',
  'img/flags/h40/mh.png',
  'img/flags/h40/ma.png',
  'img/flags/h40/cm.png',
  'img/flags/h40/dz.png',
  'img/flags/h40/sl.png',
  'img/flags/h40/ag.png',
  'img/flags/h40/ki.png',
  'img/flags/h40/sm.png',
  'img/flags/h40/zw.png',
  'img/flags/h40/ck.png',
  'img/flags/h40/uz.png',
  'img/flags/h40/dj.png',
  'img/flags/h40/sc.png',
  'img/flags/h40/pn.png',
  'img/flags/h40/bd.png',
  'img/flags/h40/vu.png',
  'img/flags/h40/af.png',
  'img/flags/h40/gb-nir.png',
  'img/flags/h40/tj.png',
  'img/flags/h40/ie.png',
  'img/flags/h40/au.png',
  'img/flags/h40/pr.png'
];

// --- LIFECYCLE EVENTS ---

self.addEventListener('install', (event) => {
  self.skipWaiting(); 
  event.waitUntil(
    caches.open(CACHE_NAME).then(async (cache) => {
      console.log('SW: Installing Core Assets');
      // Install Core and Vendor first (Atomic)
      await cache.addAll([...coreAssets, ...vendorAssets]);
      
      // Install Media assets (Non-blocking)
      mediaAssets.forEach(url => {
        cache.add(url).catch(err => console.warn(`SW: Failed to lazy-cache ${url}`));
      });
    })
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.filter(key => key !== CACHE_NAME).map(key => caches.delete(key))
      );
    }).then(() => self.clients.claim())
  );
});

// --- FETCH STRATEGY ---

self.addEventListener('fetch', (event) => {
  const url = new URL(event.request.url);

  // STRATEGY 1: Cache-First for Audio, Fonts, and Flags
  // This avoids the "Range: bytes=0-" header issues and "Lie-fi" freezes
  const isMedia = url.pathname.match(/\.(mp3|ttf|png|jpg|jpeg|gif)$/);
  
  if (isMedia) {
    event.respondWith(
      caches.match(event.request).then((res) => {
        return res || fetch(event.request).then((networkRes) => {
          return caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, networkRes.clone());
            return networkRes;
          });
        });
      })
    );
  } 
  // STRATEGY 2: Network-First for HTML, JS, CSS
  else {
    event.respondWith(networkFirstWithTimeout(event.request));
  }
});

async function networkFirstWithTimeout(request) {
  const timeoutMs = 4000; // 4 second limit
  const controller = new AbortController();
  const id = setTimeout(() => controller.abort(), timeoutMs);

  try {
    const response = await fetch(request, { signal: controller.signal });
    clearTimeout(id);

    if (response.ok) {
      const cache = await caches.open(CACHE_NAME);
      cache.put(request, response.clone());
      return response;
    }
    throw new Error('Network status not OK');
  } catch (err) {
    clearTimeout(id);
    const cachedResponse = await caches.match(request);
    // If no network and no cache, return the main index.html as a fallback
    return cachedResponse || caches.match('index.html');
  }
}