<?php
// Default fallbacks if not provided by page
if (!isset($page_title)) $page_title = "AVM Packaging Machine Trader, Exporter, Manufacturer India";
if (!isset($page_description)) $page_description = "We are a leading Manufacturer, Trader, Supplier and Exporter of Automatic Packaging Machines all over Mumbai, India.";
if (!isset($page_keywords)) $page_keywords = "AVM Packaging Systems, Sealing machines, Packing machines, Shrink Tunnel Machines, Carton Taping machines Wrapping Machines, Coding machines, Packing Machine Mumbai";
if (!isset($canonical_url)) $canonical_url = "https://avmpackagingsystem.com/";
if (!isset($og_image)) $og_image = "https://avmpackagingsystem.com/chips-packaging-machine.jpg";
if (!isset($active_nav)) $active_nav = "";
?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0">
  
  <title><?php echo htmlspecialchars($page_title, ENT_QUOTES, 'UTF-8'); ?></title>
  <meta name="description" content="<?php echo htmlspecialchars($page_description, ENT_QUOTES, 'UTF-8'); ?>">
  <?php if (!empty($page_keywords)): ?>
  <meta name="keywords" content="<?php echo htmlspecialchars($page_keywords, ENT_QUOTES, 'UTF-8'); ?>">
  <?php endif; ?>
  <meta name="author" content="AVM Packaging System Mumbai India">
  <meta name="robots" content="index, follow">
  
  <!-- Canonical URL -->
  <link rel="canonical" href="<?php echo htmlspecialchars($canonical_url, ENT_QUOTES, 'UTF-8'); ?>">
  
  <!-- Verification & Analytics Preserved from Original Site -->
  <meta name="msvalidate.01" content="CE7DF02D98136441554DF061849B534C">
  <meta name="format-detection" content="telephone=yes">
  
  <!-- OpenGraph / Social Meta -->
  <meta property="og:type" content="website">
  <meta property="og:url" content="<?php echo htmlspecialchars($canonical_url, ENT_QUOTES, 'UTF-8'); ?>">
  <meta property="og:title" content="<?php echo htmlspecialchars($page_title, ENT_QUOTES, 'UTF-8'); ?>">
  <meta property="og:description" content="<?php echo htmlspecialchars($page_description, ENT_QUOTES, 'UTF-8'); ?>">
  <meta property="og:image" content="<?php echo htmlspecialchars($og_image, ENT_QUOTES, 'UTF-8'); ?>">
  <meta property="og:image:secure_url" content="<?php echo htmlspecialchars($og_image, ENT_QUOTES, 'UTF-8'); ?>">
  <meta property="og:site_name" content="AVM Packaging System">
  
  <!-- Favicon -->
  <link rel="icon" href="images/favicon.ico" type="image/x-icon">
  <link rel="shortcut icon" type="image/x-icon" href="images/favicon.png">
  
  <!-- Google Analytics Preserved -->
  <script async src="https://www.googletagmanager.com/gtag/js?id=G-SM7PJKPWLN"></script>
  <script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-SM7PJKPWLN');
  </script>

  <!-- Modern Industrial Stylesheet -->
  <link rel="stylesheet" href="css/modern-industrial.css">
  
  <!-- Injected Structured Data Schema (JSON-LD) -->
  <?php if (isset($schema_json) && !empty($schema_json)): ?>
  <?php echo $schema_json; ?>
  <?php endif; ?>
</head>
<body>

  <!-- Top Contact Bar -->
  <div class="topbar">
    <div class="container">
      <div class="topbar-left">
        <a href="tel:+918928852195">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
          +91-8928852195
        </a>
        <a href="tel:+919869911733">+91-9869911733</a>
        <a href="mailto:info@avmpackagingsystem.com">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
          info@avmpackagingsystem.com
        </a>
      </div>
      <div class="topbar-right">
        <span class="topbar-badge">ISO Compliant Machinery</span>
        <span>Mumbai, Maharashtra, India</span>
        <a href="avmpackagingsystem.pdf" target="_blank" class="btn btn-outline-white btn-sm" style="padding: 3px 10px; font-size: 0.75rem;">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/></svg>
          Catalog PDF
        </a>
      </div>
    </div>
  </div>

  <!-- Main Site Header -->
  <header class="site-header">
    <div class="container">
      <div class="header-main">
        <!-- Logo -->
        <a href="index.php" class="logo-wrapper">
          <img src="images/avmlogo.png" alt="AVM Packaging Systems Logo" class="logo-img" width="220" height="52">
        </a>

        <!-- Desktop Navigation -->
        <nav class="nav-menu" aria-label="Main Navigation">
          <div class="nav-item <?php echo ($active_nav === 'home') ? 'active' : ''; ?>">
            <a href="index.php" class="nav-link">Home</a>
          </div>

          <div class="nav-item <?php echo ($active_nav === 'about') ? 'active' : ''; ?>">
            <a href="aboutus.php" class="nav-link">About Us</a>
          </div>

          <!-- Machinery Mega Menu -->
          <div class="nav-item <?php echo ($active_nav === 'products') ? 'active' : ''; ?>">
            <a href="packaging-machine.php" class="nav-link">
              Our Products
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"/></svg>
            </a>
            <div class="mega-dropdown">
              <!-- Column 1: Pouch & Form Fill Seal -->
              <div class="mega-col">
                <div class="mega-col-title">Pouch & FFS Machinery</div>
                <ul class="mega-links">
                  <li><a href="pouch-packaging-machine.php">Pouch Packaging Machines</a></li>
                  <li><a href="automatic-pouch-packing-machine.php">Automatic Pouch Packing Machine</a></li>
                  <li><a href="form-filling-machine.php">Form Filling Machine (FFS)</a></li>
                  <li><a href="collar-type-packaging-machine.php">Collar Type Filling Machine</a></li>
                  <li><a href="potato-chips-packing-machine.php">Potato Chips Packing Machine</a></li>
                  <li><a href="dry-fruit-packing-machine.php">Dry Fruit Packing Machine</a></li>
                  <li><a href="horizontal-flow-wrap-machine.php">Horizontal Flow Wrap Machine</a></li>
                  <li><a href="packing-machine.php">Packing Machines Overview</a></li>
                </ul>
              </div>

              <!-- Column 2: Sealing & Vacuum Systems -->
              <div class="mega-col">
                <div class="mega-col-title">Sealing & Vacuum Equipment</div>
                <ul class="mega-links">
                  <li><a href="sealing-machine.php">Industrial Sealing Machines</a></li>
                  <li><a href="continuous-sealing-machine.php">Continuous Sealing Machine</a></li>
                  <li><a href="band-sealing-machine.php">Band Sealer Machine</a></li>
                  <li><a href="vacuum-sealing-machine.php">Vacuum Sealing Machine</a></li>
                  <li><a href="vacuum-sealers.php">Vacuum Sealers (Table Top/Chamber)</a></li>
                  <li><a href="pedal-sealing-machine.php">Pedal / Foot Sealing Machine</a></li>
                  <li><a href="pouch-sealing-machine.php">Pouch Sealing Machine</a></li>
                  <li><a href="induction-sealing-machine.php">Induction Cap Sealing Machine</a></li>
                  <li><a href="tube-sealing-machine.php">Tube Sealing Machine</a></li>
                  <li><a href="plastic-tube-sealing-machine.php">Plastic Tube Sealing Machine</a></li>
                </ul>
              </div>

              <!-- Column 3: Filling, Coding & End-of-Line -->
              <div class="mega-col">
                <div class="mega-col-title">Filling, Coding & End-of-Line</div>
                <ul class="mega-links">
                  <li><a href="auger-filling-machine.php">Auger Powder Filling Machine</a></li>
                  <li><a href="powder-filling-machine.php">Powder Filling Machine</a></li>
                  <li><a href="liquid-filling-machine.php">Liquid Bottle Filling Machine</a></li>
                  <li><a href="paste-filling-machine.php">Paste & Cream Filling Machine</a></li>
                  <li><a href="liquid-paste-packing-machine.php">Liquid Paste Packing Machine</a></li>
                  <li><a href="weigh-filling-machine.php">Weigh Filling Machine</a></li>
                  <li><a href="coding-machine.php">Batch Coding Machine</a></li>
                  <li><a href="pad-printing-machine.php">Pad Printing Machine</a></li>
                  <li><a href="carton-batch-coding-machine.php">Carton Batch Coding Machine</a></li>
                  <li><a href="bottle-sticker-labeling-machine.php">Bottle Sticker Labeling Machine</a></li>
                  <li><a href="strapping-machine.php">Box Strapping Machine</a></li>
                  <li><a href="box-strapping-machine.php">Carton Strapping Solutions</a></li>
                  <li><a href="carton-taping-machine.php">Carton Taping Machine</a></li>
                  <li><a href="shrink-tunnel-machine.php">Shrink Tunnel Machine</a></li>
                  <li><a href="wrapping-machine.php">Shrink & Tray Wrapping Machine</a></li>
                  <li><a href="conveyor-systems.php">Industrial Conveyor Systems</a></li>
                  <li><a href="crown-cap-sealing-machine.php">Crown Cap Sealing Machine</a></li>
                  <li><a href="manual-crown-capping-machine.php">Manual Crown Capping Machine</a></li>
                </ul>
              </div>
            </div>
          </div>

          <div class="nav-item <?php echo ($active_nav === 'video') ? 'active' : ''; ?>">
            <a href="videogallery.php" class="nav-link">Video Gallery</a>
          </div>

          <div class="nav-item <?php echo ($active_nav === 'contact') ? 'active' : ''; ?>">
            <a href="contactus.php" class="nav-link">Contact Us</a>
          </div>
        </nav>

        <!-- Header Actions -->
        <div class="header-actions">
          <a href="tel:+918928852195" class="btn btn-outline btn-sm" style="display: none; @media(min-width: 900px){display:inline-flex;}">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
            Call Us
          </a>
          <button type="button" class="btn btn-primary btn-sm" data-open-quote data-machine="General Inquiry">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
            Request Quote
          </button>
          <!-- Mobile Hamburger Toggle -->
          <button type="button" class="mobile-nav-toggle" aria-label="Open Navigation Menu">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
          </button>
        </div>
      </div>
    </div>
  </header>

  <!-- Mobile Drawer Backdrop -->
  <div class="drawer-backdrop"></div>

  <!-- Mobile Navigation Drawer -->
  <div class="mobile-drawer" aria-label="Mobile Navigation Drawer">
    <div class="drawer-header">
      <img src="images/avmlogo.png" alt="AVM Packaging System" height="38">
      <button type="button" class="drawer-close" aria-label="Close Navigation Menu">&times;</button>
    </div>
    <div class="drawer-body">
      <ul class="mobile-nav-list">
        <li class="mobile-nav-item">
          <a href="index.php" class="mobile-nav-link">Home</a>
        </li>
        <li class="mobile-nav-item">
          <a href="aboutus.php" class="mobile-nav-link">About Us</a>
        </li>
        <li class="mobile-nav-item">
          <a href="#" class="mobile-nav-link mobile-submenu-trigger">
            <span>Our Products & Machinery</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"/></svg>
          </a>
          <div class="mobile-submenu">
            <strong style="display:block; padding: 6px 10px; font-size: 0.75rem; color: var(--primary); text-transform: uppercase;">Pouch & FFS</strong>
            <a href="pouch-packaging-machine.php">• Pouch Packaging Machine</a>
            <a href="automatic-pouch-packing-machine.php">• Automatic Pouch Packing</a>
            <a href="form-filling-machine.php">• Form Fill Seal Machine</a>
            <a href="collar-type-packaging-machine.php">• Collar Type Filling</a>
            <a href="potato-chips-packing-machine.php">• Potato Chips Packaging</a>
            <a href="dry-fruit-packing-machine.php">• Dry Fruit Packing</a>
            <a href="horizontal-flow-wrap-machine.php">• Flow Wrap Machine</a>

            <strong style="display:block; padding: 10px 10px 4px; font-size: 0.75rem; color: var(--primary); text-transform: uppercase;">Sealing & Vacuum</strong>
            <a href="sealing-machine.php">• Sealing Machines</a>
            <a href="continuous-sealing-machine.php">• Continuous Sealing</a>
            <a href="band-sealing-machine.php">• Band Sealer Machine</a>
            <a href="vacuum-sealing-machine.php">• Vacuum Sealing Machine</a>
            <a href="pedal-sealing-machine.php">• Pedal Sealing Machine</a>
            <a href="induction-sealing-machine.php">• Induction Sealing</a>
            <a href="tube-sealing-machine.php">• Tube Sealing Machine</a>

            <strong style="display:block; padding: 10px 10px 4px; font-size: 0.75rem; color: var(--primary); text-transform: uppercase;">Filling, Coding & Taping</strong>
            <a href="auger-filling-machine.php">• Auger Powder Filler</a>
            <a href="liquid-filling-machine.php">• Liquid Filling Machine</a>
            <a href="paste-filling-machine.php">• Paste Filling Machine</a>
            <a href="weigh-filling-machine.php">• Weigh Filling Machine</a>
            <a href="coding-machine.php">• Batch Coding Machine</a>
            <a href="pad-printing-machine.php">• Pad Printing Machine</a>
            <a href="carton-taping-machine.php">• Carton Taping Machine</a>
            <a href="strapping-machine.php">• Strapping Machine</a>
            <a href="shrink-tunnel-machine.php">• Shrink Tunnel Machine</a>
            <a href="conveyor-systems.php">• Conveyor Systems</a>
          </div>
        </li>
        <li class="mobile-nav-item">
          <a href="videogallery.php" class="mobile-nav-link">Video Gallery</a>
        </li>
        <li class="mobile-nav-item">
          <a href="contactus.php" class="mobile-nav-link">Contact Us</a>
        </li>
      </ul>

      <div style="margin-top: 24px;">
        <button type="button" class="btn btn-primary btn-block" style="width: 100%; margin-bottom: 10px;" data-open-quote data-machine="General Inquiry">
          Request Machine Quote
        </button>
        <a href="tel:+918928852195" class="btn btn-dark btn-block" style="width: 100%;">
          Call: +91-8928852195
        </a>
      </div>
    </div>
  </div>
