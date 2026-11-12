<?php
$page_title = "Disclaimer | AVM Packaging System";
$page_description = "Read the disclaimer of AVM Packaging System regarding website content, product information, and limitations of liability.";
$page_keywords = "disclaimer AVM Packaging, website disclaimer India, packaging machine disclaimer";
$canonical_url = "https://avmpackagingsystem.com/disclaimer.php";
$active_nav = "";

$schema_json = <<<EOT
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Disclaimer | AVM Packaging System",
  "url": "https://avmpackagingsystem.com/disclaimer.php",
  "breadcrumb": {
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://avmpackagingsystem.com/" },
      { "@type": "ListItem", "position": 2, "name": "Disclaimer", "item": "https://avmpackagingsystem.com/disclaimer.php" }
    ]
  }
}
</script>
EOT;

include 'includes/header.php';
?>

  <div class="breadcrumbs-bar">
    <div class="container">
      <div class="breadcrumbs-list">
        <a href="index.php">Home</a>
        <span class="separator">/</span>
        <span class="current">Disclaimer</span>
      </div>
    </div>
  </div>

  <div class="page-banner">
    <div class="container">
      <h1>Disclaimer</h1>
      <p>Important legal disclaimer regarding catalog specifications, illustrations, and operational performance.</p>
    </div>
  </div>

  <section class="section">
    <div class="container" style="max-width: 860px;">
      <div style="background: #fff; border: 1px solid var(--border-light); border-radius: 12px; padding: 36px; box-shadow: var(--shadow-sm);">
        <h2 style="font-size: 1.4rem; margin-bottom: 14px;">1. Product Information &amp; Illustrations</h2>
        <p style="margin-bottom: 20px;">
          Photographs, diagrams, and machine descriptions on this website represent standard and custom configurations manufactured by AVM Packaging System. Actual visual appearance, frame finish, and component layout may vary slightly due to continuous product upgrades and customized client requirements.
        </p>

        <h2 style="font-size: 1.4rem; margin-bottom: 14px;">2. Performance &amp; Capacities</h2>
        <p style="margin-bottom: 20px;">
          Stated production rates (e.g., PPM, filling speed) are indicative benchmarks attained under optimal testing conditions. Actual throughput may vary depending on material viscosity, powder flowability, pouch material, operator dexterity, and ambient working temperatures.
        </p>

        <h2 style="font-size: 1.4rem; margin-bottom: 14px;">3. Intellectual Property</h2>
        <p>
          All trademarks, logos, diagrams, and textual content are the intellectual property of AVM Packaging System and protected under relevant laws.
        </p>
      </div>
    </div>
  </section>

<?php
include 'includes/footer.php';
?>
