import { RouteReuseStrategy, ActivatedRouteSnapshot, DetachedRouteHandle} from '@angular/router';

export class CustomRouteReuseStrategy extends RouteReuseStrategy {

  shouldDetach(route: ActivatedRouteSnapshot): boolean {
    throw new Error('Method not implemented.');
  }

  store(route: ActivatedRouteSnapshot, handle: DetachedRouteHandle): void {
    throw new Error('Method not implemented.');
  }

  shouldAttach(route: ActivatedRouteSnapshot): boolean {
    throw new Error('Method not implemented.');
  }

  retrieve(route: ActivatedRouteSnapshot): DetachedRouteHandle {
    return {};
  }

  shouldReuseRoute(future: ActivatedRouteSnapshot, curr: ActivatedRouteSnapshot): boolean {
    return false;
  }
}
