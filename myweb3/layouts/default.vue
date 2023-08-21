<template>
  <div>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="/">Uanklom</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/about">About Us</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/limitmessage">Limit Message</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/previewImage">PreviewImage</a>
        </li>
      </ul>
      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
    <slot />
  </div>
  <footer class="bd-footer py-4 py-md-5 mt-5 bg-body-tertiary">
  <div class="container py-4 py-md-5 px-4 px-md-3 text-body-secondary">
    <div class="row">
      <div class="col-lg-3 mb-3">
        <a class="d-inline-flex align-items-center mb-2 text-body-emphasis text-decoration-none" href="/" aria-label="Bootstrap">
        <span class="fs-5">Uanklom.com</span>
        </a>
        <ul class="list-unstyled small">
          <li class="mb-2">66309010018@tatc.ac.th</li>
          <li class="mb-2">Surasit Suwannachat</li>
          <li class="mb-2">IT 4/1</li>
        </ul>
      </div>
      <div class="col-6 col-lg-2 offset-lg-1 mb-3">
    </div>
    </div>
  </div>
</footer>
</template>
